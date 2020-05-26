export interface GeoSearchUserData {
  bbox: number[];
  country: string;
  district: string;
  evidenceNumber: string;
  highlight: number[];
  highlightSecond: number[];
  houseNumber: string;
  iconType: string;
  id: number;
  img: string;
  importance: number;
  latitude: number;
  longitude: number;
  muniId: string;
  municipality: string;
  nuts: string;
  poiType: string;
  poiTypeId: number;
  popularity: number;
  premiseIds: any[];
  quarter: string;
  region: string;
  source: string;
  street: string;
  streetNumber: string;
  suggestFirstRow: string;
  suggestSecondRow: string;
  suggestThirdRow: string;
  ward: string;
  wikiId: string;
  zipCode: string;
}

export interface GeoSearchResult {
  category: GeoSearchScope | string | undefined;
  highlight: number[];
  sentence: string;
  userData: GeoSearchUserData;
}

export interface GeoSearchData {
  deletedFromBack: number;
  hasGeo: number;
  hasService: number;
  id: string;
  result: GeoSearchResult[];
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface LatLngBounds {
  sw: LatLng;
  ne: LatLng;
}

export interface GeoSearchOptions {
  phrase: string;
  scope?: GeoSearchScope;
  bounds?: LatLngBounds;
  country?: GeoSearchCountries;
  debug?: boolean;
}

export type GeoSearchCountries = "cz" | "sk" | "de" | "us" | "gb";

export type GeoSearchScope = "muni" | "area" | "pubt" | "street";
