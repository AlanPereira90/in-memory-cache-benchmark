import { memoizeAsync } from "utils-decorators";
import { CONFIG } from "../infra/env";

export class UtilsDecorator {
  @memoizeAsync(CONFIG.CACHE_AGE)
  public static async execute<T extends (...args: any[]) => any>(functionToMemoize: T): Promise<any> {
    const result = await functionToMemoize();

    return result;
  }
}
