import cachePromise from "cache-promise-result";
import { CONFIG } from "../infra/env";

export namespace CachePromiseResult {
  export const execute = <T extends (...args: any[]) => any>(functionToMemoize: T) => {
    return cachePromise(functionToMemoize, CONFIG.CACHE_AGE);
  };
}
