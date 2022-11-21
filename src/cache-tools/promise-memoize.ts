import promiseMemoize from "promise-memoize";
import { CONFIG } from "../infra/env";

export namespace PromiseMemoize {
  export const execute = <T extends (...args: any[]) => any>(functionToMemoize: T) => {
    return promiseMemoize(functionToMemoize, { maxAge: CONFIG.CACHE_AGE });
  };
}
