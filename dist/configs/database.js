"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
//initializes the environment variables.
dotenv_1.default.config({ path: '../.env' });
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, DEV_POSTGRES_DB = _a.DEV_POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV, TEST_POSTGRES_DB = _a.TEST_POSTGRES_DB;
var client = new pg_1.Pool();
console.log("ENV: ", ENV);
if (ENV === "test") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: TEST_POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD || 'password123',
    });
}
if (ENV === "dev") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: DEV_POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD || 'password123',
    });
}
exports.default = client;
