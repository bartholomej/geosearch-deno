import {
  GeoSearchOptions,
  GeoSearchResult,
} from "./interface/geosearch.interface.ts";
import { geoSearch } from "./geosearch.ts";

export const resolveOptions = async (
  options: GeoSearchOptions,
): Promise<string | GeoSearchResult[]> => {
  switch (Object.keys(options)[1]) {
    case "help":
    case "h":
    case "":
    case undefined:
      return displayHelpMsg();
    default:
      return await geoSearch(options);
  }
};

const displayHelpMsg = (): string => {
  return `
  -> geosearch-deno
  run the cli command with the following flags:
  -h, --help: display help message
  -p, --phrase: search phrase
  -s, --scope: Preferred category of results: 'muni' | 'area' | 'pubt' | 'street'
  -c, --country: Preferred country: 'cz' | 'sk' | 'us' | 'de'
  `;
};
