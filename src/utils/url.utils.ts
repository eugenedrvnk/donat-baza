import { Injectable } from "@nestjs/common";
import { UrlUtils } from "./url.types";

@Injectable()
export class BaseUrlUtils implements UrlUtils {
  buildUrl: UrlUtils['buildUrl'] = ({ url, query }) => {
    let preparedQuery: string = '';
    let preparedUrl: string;

    if (query) {
      const queryAsObject: Record<string, string> = {};
      Object.entries(query).map(([key, value]) => {
        queryAsObject[key] = String(value);
      })
      preparedQuery = new URLSearchParams(queryAsObject).toString();
    }

    preparedUrl = url.slice(-1) !== '?' ? url + '?' : url;
    return preparedUrl + preparedQuery;
  }
}
