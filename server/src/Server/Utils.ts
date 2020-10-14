import { parse, UrlWithParsedQuery, UrlWithStringQuery } from "url";

class Utils {
  // Static properties/methods can only be accessed without instantiating the class
  public static getUrlRoute(url: string | undefined): string | null {
    if (url) {
      const parsedUrl = this.getQueryParams(url);
      if (parsedUrl) {
        return parsedUrl.pathname!;
      }
    }
    return "";
  }

  public static getQueryParams(
    url: string | undefined
  ): UrlWithParsedQuery | undefined {
    if (url) {
      return parse(url, true);
    } else {
      return undefined;
    }
  }
}

export default Utils;
