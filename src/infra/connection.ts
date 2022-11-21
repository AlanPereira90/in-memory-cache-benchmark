import { Pool } from "pg";
import {POSTGRES} from './env';

const pgPool = new Pool({
    user: POSTGRES.USER_NAME,
    password: POSTGRES.PASSWORD,
    host: POSTGRES.HOST,
    port: POSTGRES.PORT,
    database: POSTGRES.DATABASE,
});

export default pgPool;
