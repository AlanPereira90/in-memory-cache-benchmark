import memoizee from "memoizee";
import { CONFIG } from "../infra/env";

export namespace Memoizee {
  export const execute = <T extends (...args: any[]) => any>(functionToMemoize: T) => {
    return memoizee(functionToMemoize, {
      promise: true,
      maxAge: CONFIG.CACHE_AGE,
    });
  };
}
