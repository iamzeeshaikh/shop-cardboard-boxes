import type { LocationPage } from './types';
import { california, texas, florida, newYork, pennsylvania } from './states-a';
import { illinois, ohio, georgia, northCarolina, michigan } from './states-b';
import { newJersey, virginia, washington, arizona, massachusetts } from './states-c';
import { tennessee, indiana, missouri, maryland, colorado } from './states-d';
import { newYorkCity, losAngeles, chicago, houston, phoenix } from './cities-a';
import { philadelphia, sanAntonio, sanDiego, dallas, austin } from './cities-b';
import { jacksonville, fortWorth, columbus, charlotte, indianapolis } from './cities-c';
import { seattle, denver, boston, nashville, atlanta } from './cities-d';

export const STATES: LocationPage[] = [
  california, texas, florida, newYork, pennsylvania,
  illinois, ohio, georgia, northCarolina, michigan,
  newJersey, virginia, washington, arizona, massachusetts,
  tennessee, indiana, missouri, maryland, colorado,
];

export const CITIES: LocationPage[] = [
  newYorkCity, losAngeles, chicago, houston, phoenix,
  philadelphia, sanAntonio, sanDiego, dallas, austin,
  jacksonville, fortWorth, columbus, charlotte, indianapolis,
  seattle, denver, boston, nashville, atlanta,
];

export const LOCATIONS: LocationPage[] = [...STATES, ...CITIES];
export const locationBySlug = new Map(LOCATIONS.map((location) => [location.slug, location]));

export const REGIONS = ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'] as const;

export type { LocationPage };
