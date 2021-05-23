"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
var constants_1 = require("../../utils/constants");
function up(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex.schema.createTable(constants_1.inventory_table, function (t) {
                        t.increments("id").unsigned().primary().notNullable(),
                            t.string("name").notNullable().unique(),
                            t.integer("capacity").notNullable();
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(constants_1.machine_table, function (t) {
                            t.increments("id").unsigned().primary().notNullable(),
                                t.string("name").notNullable().unique(),
                                t.integer("total_slots").notNullable().defaultTo(2);
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(constants_1.product_table, function (t) {
                            t.increments("id").unsigned().primary().notNullable(),
                                t.string("name").notNullable().unique(),
                                t.integer("sales_value").notNullable(),
                                t.integer("machine_id").references(constants_1.machine_table + ".id").notNullable(),
                                t
                                    .integer("inventory_id")
                                    .references(constants_1.inventory_table + ".id")
                                    .notNullable(),
                                t.integer("time_in_minute").notNullable(),
                                t
                                    .integer("output_multiplier")
                                    .notNullable()
                                    .defaultTo(1)
                                    .comment("how many product can be made at once");
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(constants_1.order_table, function (t) {
                            t.increments("id").unsigned().primary().notNullable(),
                                t.string("name").notNullable(),
                                t.integer("value_amount").notNullable(),
                                t.integer("stars").notNullable();
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(constants_1.order_list_table, function (t) {
                            t.increments("id").unsigned().primary().notNullable(),
                                t.integer("order_id").references(constants_1.order_table + ".id").notNullable(),
                                t.integer("product_id").references(constants_1.product_table + ".id").notNullable(),
                                t.integer("product_multiplier").notNullable().defaultTo(1);
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(constants_1.recipe_table, function (t) {
                            t.increments("id").unsigned().primary().notNullable(),
                                t.integer("product_id").references(constants_1.product_table + ".id").notNullable(),
                                t
                                    .integer("ingredient_id")
                                    .references(constants_1.product_table + ".id")
                                    .notNullable(),
                                t.integer("ingredient_multiplier").notNullable().defaultTo(1);
                        })];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.recipe_table)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.order_list_table)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.order_table)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.product_table)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.machine_table)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.dropTableIfExists(constants_1.inventory_table)];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.down = down;
//# sourceMappingURL=20210522053451_init.js.map