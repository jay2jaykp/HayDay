"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = {
    client: process.env.DB_CLIENT || "pg",
    connection: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASS || "admin",
        database: process.env.DB_NAME || "hayday",
    },
    migrations: {
        directory: path_1.default.join(__dirname + "/migrations"),
    },
    seeds: {
        directory: path_1.default.join(__dirname + "/seeds"),
    },
};
module.exports = config;
//# sourceMappingURL=knex.config.js.map