import * as dotenv from "dotenv";
import * as fs from "fs";

function requiredEnvVar(varName: string): never {
  console.error("\x1b[31m%s\x1b[0m", `⚠️  Required environment variable "${varName}" is missing.`);

  process.exit(1);
}

if (fs.existsSync(".env")) {
  console.debug("Using .env file to supply config environment variables");
  dotenv.config({ path: ".env" });
}

export const POSTGRES = {
  USER_NAME: process.env.POSTGRES_USER_NAME || requiredEnvVar("POSTGRES_USER_NAME"),
  PASSWORD: process.env.POSTGRES_PASSWORD || requiredEnvVar("POSTGRES_PASSWORD"),
  HOST: process.env.POSTGRES_HOST || requiredEnvVar("POSTGRES_HOST"),
  PORT: Number(process.env.POSTGRES_PORT) || 5432,
  DATABASE: process.env.POSTGRES_DATABASE || requiredEnvVar("POSTGRES_DATABASE"),
};

export const CONFIG = {
  EXECUTION_QUERY: process.env.EXECUTION_QUERY || "SELECT NOW()",
  CACHE_AGE: Number(process.env.CACHE_AGE),
};
