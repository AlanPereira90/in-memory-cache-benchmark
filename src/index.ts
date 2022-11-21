import { Suite } from "benchmark";
import { CONFIG } from "./infra/env";
import { Memoizee } from "./cache-tools/memoizee";
import { Query } from "./query/query";
import { PromiseMemoize } from "./cache-tools/promise-memoize";
import { UtilsDecorator } from "./cache-tools/utils-decorator";
import { CachePromiseResult } from "./cache-tools/cache-promise-result";

const createBenchmark = () => {
  const suite = new Suite();
  suite
    .add("memoizee", async () => {
      const exec = Memoizee.execute(Query.execute);
      await exec();
    })
    .add("promise-memoize", async () => {
      const exec = PromiseMemoize.execute(Query.execute);
      await exec();
    })
    .add("utils-decorators", async () => {
      await UtilsDecorator.execute(Query.execute);
    })
    .add("cache-promise-result", async () => {
      const exec = CachePromiseResult.execute(Query.execute);
      await exec();
    })

    .on("cycle", function (event: any) {
      console.log(String(event.target));
    })
    .on("complete", function () {
      // @ts-ignore
      const suit = this;

      console.log(
        `\x1b[34m[Test with ${CONFIG.EXECUTION_TIMES} executions]\x1b[0m`,
        `Fastest is \x1b[32m${suit.filter("fastest").map("name")}\x1b[0m`,
        "\n",
      );
    })
    .run({ async: true });
};

createBenchmark();
