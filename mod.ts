import { parse } from "./deps.ts";
import { GeoSearchOptions } from "./interface/geosearch.interface.ts";
import { resolveOptions } from "./help.ts";

const options = parse(Deno.args) as unknown as GeoSearchOptions;

const result = await resolveOptions(options);

console.log(result);
