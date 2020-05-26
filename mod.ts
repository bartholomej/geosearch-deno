import { parse } from "./src/deps.ts";
import { GeoSearchOptions } from "./src/interface/geosearch.interface.ts";
import { resolveOptions } from "./src/help.ts";

const options = parse(Deno.args) as unknown as GeoSearchOptions;

const result = await resolveOptions(options);

console.log(result);
