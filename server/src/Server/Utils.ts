import { parse } from "url";

class Utils {
  // Static properties/methods can only be accessed without instantiating the class
  public static getUrlRoute(url: string | undefined): string | null {
    if (url) {
      const parsedUrl = parse(url);

      return parsedUrl.pathname!;
    }
    return "";
  }
}

export default Utils;
