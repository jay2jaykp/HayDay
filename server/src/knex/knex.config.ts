import { Knex } from "knex";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
  client: process.env.DB_CLIENT || "pg",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "admin",
    database: process.env.DB_NAME || "hayday",
  },
  migrations: {
    directory: path.join(__dirname + "/migrations"),
  },
  seeds: {
    directory: path.join(__dirname + "/seeds"),
  },
};

module.exports = config;
