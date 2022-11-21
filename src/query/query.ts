import pgPool from "../infra/connection";
import { CONFIG } from "../infra/env";

export namespace Query {
  export const execute = async () => {
    return setTimeout(async () => {
      return (await pgPool.query(CONFIG.EXECUTION_QUERY)).rows[0];
    }, 1000);
  };
}
