import pgPool from "../infra/connection";
import { CONFIG } from "../infra/env";

export namespace Query {
  export const execute = async () => {
    await pgPool.query(CONFIG.EXECUTION_QUERY);
  };
}
