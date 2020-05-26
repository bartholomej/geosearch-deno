import { getBounds, filterData } from "./utils/utils.ts";
import { API_URL, COUNT } from "./vars.ts";
import {
  GeoSearchOptions,
  GeoSearchData,
  GeoSearchResult,
} from "./interface/geosearch.interface.ts";

export const geoSearch = async (
  options: GeoSearchOptions,
): Promise<GeoSearchResult[]> => {
  const bounds = await getBounds(options);

  const apiUrl = `${API_URL}?count=${COUNT}&phrase=${
    encodeURIComponent(options.phrase)
  }${bounds}`;

  const res = await fetch(apiUrl);
  const json = res.json();
  const data: GeoSearchData = await json;

  const result = filterData(data.result, options);

  return result;
};
