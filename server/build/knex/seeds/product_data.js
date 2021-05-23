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
exports.seed = void 0;
var constants_1 = require("../../utils/constants");
function seed(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Deletes ALL existing entries
                return [4 /*yield*/, knex(constants_1.product_table).del()];
                case 1:
                    // Deletes ALL existing entries
                    _a.sent();
                    // Inserts seed entries
                    return [4 /*yield*/, knex(constants_1.product_table).insert([
                            {
                                name: "Pumpkin",
                                sales_value: 32,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 180,
                                output_multiplier: 2,
                            },
                            {
                                name: "Wheat",
                                sales_value: 3,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 2,
                                output_multiplier: 2,
                            },
                            {
                                name: "Carrot",
                                sales_value: 7,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 10,
                                output_multiplier: 2,
                            },
                            {
                                name: "Potato",
                                sales_value: 36,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 220,
                                output_multiplier: 2,
                            },
                            {
                                name: "Chili Pepper",
                                sales_value: 36,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 240,
                                output_multiplier: 2,
                            },
                            {
                                name: "Corn",
                                sales_value: 7,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 5,
                                output_multiplier: 2,
                            },
                            {
                                name: "Indigo",
                                sales_value: 25,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 120,
                                output_multiplier: 2,
                            },
                            {
                                name: "Cotton",
                                sales_value: 28,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 150,
                                output_multiplier: 2,
                            },
                            {
                                name: "Sugarcane",
                                sales_value: 14,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 30,
                                output_multiplier: 2,
                            },
                            {
                                name: "Soybean",
                                sales_value: 10,
                                machine_id: 16,
                                inventory_id: 1,
                                time_in_minute: 20,
                                output_multiplier: 2,
                            },
                            {
                                name: "Cow Feed",
                                sales_value: 14,
                                machine_id: 1,
                                inventory_id: 2,
                                time_in_minute: 9,
                                output_multiplier: 3,
                            },
                            {
                                name: "Chicken Feed",
                                sales_value: 7,
                                machine_id: 1,
                                inventory_id: 2,
                                time_in_minute: 4,
                                output_multiplier: 3,
                            },
                            {
                                name: "Pig Feed",
                                sales_value: 14,
                                machine_id: 1,
                                inventory_id: 2,
                                time_in_minute: 19,
                                output_multiplier: 3,
                            },
                            {
                                name: "Sheep Feed",
                                sales_value: 14,
                                machine_id: 1,
                                inventory_id: 2,
                                time_in_minute: 28,
                                output_multiplier: 3,
                            },
                            {
                                name: "Goat Feed",
                                sales_value: 14,
                                machine_id: 1,
                                inventory_id: 2,
                                time_in_minute: 38,
                                output_multiplier: 3,
                            },
                            {
                                name: "Bread",
                                sales_value: 21,
                                machine_id: 3,
                                inventory_id: 2,
                                time_in_minute: 5,
                                output_multiplier: 1,
                            },
                            {
                                name: "Corn Bread",
                                sales_value: 1,
                                machine_id: 3,
                                inventory_id: 2,
                                time_in_minute: 30,
                                output_multiplier: 1,
                            },
                            {
                                name: "Eggs",
                                sales_value: 18,
                                machine_id: 18,
                                inventory_id: 2,
                                time_in_minute: 20,
                                output_multiplier: 1,
                            },
                            {
                                name: "Milk",
                                sales_value: 32,
                                machine_id: 17,
                                inventory_id: 2,
                                time_in_minute: 60,
                                output_multiplier: 1,
                            },
                            {
                                name: "Goat Milk",
                                sales_value: 64,
                                machine_id: 21,
                                inventory_id: 2,
                                time_in_minute: 480,
                                output_multiplier: 1,
                            },
                            {
                                name: "Wool",
                                sales_value: 54,
                                machine_id: 21,
                                inventory_id: 2,
                                time_in_minute: 360,
                                output_multiplier: 1,
                            },
                            {
                                name: "Bacon",
                                sales_value: 50,
                                machine_id: 19,
                                inventory_id: 2,
                                time_in_minute: 240,
                                output_multiplier: 1,
                            },
                            {
                                name: "Cookie",
                                sales_value: 104,
                                machine_id: 3,
                                inventory_id: 2,
                                time_in_minute: 60,
                                output_multiplier: 1,
                            },
                            {
                                name: "Brown Sugar",
                                sales_value: 32,
                                machine_id: 7,
                                inventory_id: 2,
                                time_in_minute: 17,
                                output_multiplier: 1,
                            },
                        ])];
                case 2:
                    // Inserts seed entries
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.seed = seed;
//# sourceMappingURL=product_data.js.map