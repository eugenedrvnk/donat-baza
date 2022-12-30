import { Prisma } from "@prisma/client";

export type JSONValue =
    | string
    | number
    | boolean
    | Prisma.JsonObject
    | Prisma.JsonArray;

type JSONObject = {
    [x: string]: JSONValue;
}

type JSONArray = Array<JSONValue>;