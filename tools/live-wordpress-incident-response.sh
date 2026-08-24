#!/usr/bin/env bash
set -euo pipefail

# This script must be run from the live WordPress root by an authenticated operator.
# It defaults to read-only inspection. Set SCB_IR_APPLY=YES only during an approved incident window.

expected_home='https://shopcardboardboxes.com'
actual_home="$(wp option get home --skip-plugins --skip-themes)"
if [[ "$actual_home" != "$expected_home" && "$actual_home" != "$expected_home/" ]]; then
  echo "Refusing: WordPress home is $actual_home, expected $expected_home"
  exit 1
fi

echo 'Inspecting confirmed indicators from the quarantined 2026-08-24 backup:'
wp option get sc_persist_manifest --format=json --skip-plugins --skip-themes 2>/dev/null || true
wp user get administrator_69a021 --fields=ID,user_login,user_email,user_registered --format=json --skip-plugins --skip-themes 2>/dev/null || true
wp db query "SELECT user_id, meta_key FROM $(wp db prefix)usermeta WHERE user_id=4 AND meta_key IN ('$(wp db prefix)capabilities','$(wp db prefix)user_level','session_tokens');"
wp cron event list --fields=hook,next_run_relative --format=table --skip-plugins --skip-themes
wp core verify-checksums

if [[ "${SCB_IR_APPLY:-NO}" != 'YES' ]]; then
  echo 'Read-only inspection complete. No live state was changed.'
  exit 0
fi

incident_dir="$(mktemp -d -t scb-wordpress-incident.XXXXXX)"
chmod 700 "$incident_dir"
wp db export "$incident_dir/pre-cleanup.sql" --add-drop-table

if [[ -f wp-content/mu-plugins/aero-handler-plus.php ]]; then
  mv wp-content/mu-plugins/aero-handler-plus.php "$incident_dir/aero-handler-plus.php.quarantined"
fi
if [[ -f 56489040.zip ]]; then
  mv 56489040.zip "$incident_dir/56489040.zip.quarantined"
fi

wp option delete sc_persist_manifest --skip-plugins --skip-themes || true
if wp user get administrator_69a021 --field=ID --skip-plugins --skip-themes >/dev/null 2>&1; then
  wp user delete administrator_69a021 --reassign=1 --yes --skip-plugins --skip-themes
fi
if ! wp user get 4 --field=ID --skip-plugins --skip-themes >/dev/null 2>&1; then
  wp db query "DELETE FROM $(wp db prefix)usermeta WHERE user_id=4;"
fi

wp cache flush
wp core verify-checksums
wp plugin verify-checksums --all --strict
echo "Confirmed persistence removed and artifacts quarantined at: $incident_dir"
echo 'Still required in provider consoles: rotate hosting, database, WordPress, SMTP, Elementor, Google and API credentials; review access/server logs; reinstall any checksum-failing plugin from its trusted package; create a fresh clean backup.'
