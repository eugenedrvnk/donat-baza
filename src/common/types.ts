
// type JsonObject2 = {
//     readonly [x: string]: JsonValue;
// }

export type JsonObject = { [Key in string]?: JsonValue | null }


// type JsonArray = ReadonlyArray<JsonValue>;
interface JsonArray extends ReadonlyArray<JsonValue | null> {}

export type JsonValue = string | number | boolean | JsonObject | JsonArray