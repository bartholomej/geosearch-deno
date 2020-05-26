import {
  GeoSearchOptions,
  GeoSearchResult,
} from "../interface/geosearch.interface.ts";
import { getCountryBounds } from "./countries.ts";

export const getBounds = (
  options: GeoSearchOptions | undefined,
): Promise<string> => {
  return new Promise((resolve) => {
    let boundsString = "";
    let bounds;
    if (options?.bounds || options?.country) {
      bounds = options?.bounds || getCountryBounds(options?.country);
      if (bounds) {
        boundsString = `&bounds=${
          encodeURIComponent(
            `${bounds.sw.lat},${bounds.sw.lng}|${bounds.ne.lat},${bounds.ne.lng}`,
          )
        }`;
      }
    }
    resolve(boundsString);
  });
};

export function filterData(
  data: GeoSearchResult[],
  options: GeoSearchOptions | undefined,
): GeoSearchResult[] {
  let places = data;
  if (options?.scope) {
    // Filter category by scope
    places = places.filter((item) =>
      String(item.category).includes(String(options.scope))
    );

    // Special conditions for the Czech Republic
    if (options?.country === "cz") {
      places = places.filter((item) => item.userData.source === options.scope);
    }
  }
  return places;
}
