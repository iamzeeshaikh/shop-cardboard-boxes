import versions from '../../data/asset-versions.json';

/**
 * Cache-busting URL for an asset served under a fixed name. The hash lets these be
 * cached for a year while still updating the instant their content changes.
 */
export const assetUrl = (path: string): string => {
  const version = (versions as Record<string, string>)[path];
  return version ? `${path}?v=${version}` : path;
};
