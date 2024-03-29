import { log } from "console";
import dotenv from "dotenv";
import { Pool } from "pg";
//initializes the environment variables.
dotenv.config();

const {
  POSTGRES_HOST,
  DEV_POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV,
  TEST_POSTGRES_DB,
} = process.env;

let client = new Pool();
console.log("ENV: ", ENV);

if (ENV === "test") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: TEST_POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD || 'password123',
  });
}

if (ENV === "dev") {
  client = new Pool({
    host: POSTGRES_HOST,
    database: DEV_POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD || 'password123',
  });
}

export default client;
