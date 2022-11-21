import { Suite } from "benchmark";
import { Memoizee } from "./cache-tools/memoizee";
import { Query } from "./query/query";
import { PromiseMemoize } from "./cache-tools/promise-memoize";
import { UtilsDecorator } from "./cache-tools/utils-decorator";
import { CachePromiseResult } from "./cache-tools/cache-promise-result";

const memoizeeExec = Memoizee.execute(Query.execute);
const promiseMemoizeExec = PromiseMemoize.execute(Query.execute);
const utilsDecorators = UtilsDecorator.execute;
const cachePromiseResult = CachePromiseResult.execute(Query.execute);

const createBenchmark = () => {
  const suite = new Suite();
  suite
    .add("memoizee", async () => {
      await memoizeeExec();
    })
    .add("promise-memoize", async () => {
      await promiseMemoizeExec();
    })
    .add("utils-decorators", async () => {
      await utilsDecorators(Query.execute);
    })
    .add("cache-promise-result", async () => {
      await cachePromiseResult();
    })

    .on("cycle", function (event: any) {
      console.log(String(event.target));
    })
    .on("complete", function () {
      // @ts-ignore
      const suit = this;

      console.log(
        `\x1b[34m[Test complete]\x1b[0m`,
        `Fastest is \x1b[32m${suit.filter("fastest").map("name")}\x1b[0m`,
        "\n",
      );
    })
    .run({ async: true });
};

createBenchmark();
