import Knex from "knex";
import * as config from "./knex.config";
require("ts-node");

export const knex = Knex(config);
