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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_machine = exports.edit_machine = exports.add_new_machine = exports.get_machine_with_id = exports.get_all_machines = void 0;
var knex_1 = require("../../knex/knex");
var constants_1 = require("../../utils/constants");
var pg_error_codes_1 = __importDefault(require("pg-error-codes"));
// GET /machine
var get_all_machines = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.knex(constants_1.machine_table)
                    .select("*")
                    .returning("*")
                    .then(function (data) {
                    res.status(200).send(data);
                })
                    .catch(function (err) {
                    console.error(pg_error_codes_1.default[err.code]);
                    res.status(400).send(pg_error_codes_1.default[err.code]);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.get_all_machines = get_all_machines;
// GET /machine/:id
var get_machine_with_id = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.knex(constants_1.machine_table)
                    .select("*")
                    .where(req.params)
                    .returning("*")
                    .then(function (data) { return res.status(200).send(data); })
                    .catch(function (err) {
                    console.error(pg_error_codes_1.default[err.code]);
                    res.status(400).send(pg_error_codes_1.default[err.code]);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.get_machine_with_id = get_machine_with_id;
// POST /machine/add
var add_new_machine = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.knex(constants_1.machine_table)
                    .insert(req.body)
                    .returning("*")
                    .then(function (data) { return res.status(201).send(data); })
                    .catch(function (err) {
                    console.error(pg_error_codes_1.default[err.code]);
                    console.error(err);
                    res.status(400).send(pg_error_codes_1.default[err.code]);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.add_new_machine = add_new_machine;
// PUT /machine/edit/:id
var edit_machine = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            //   console.log(req.params);
            //   console.log(req.body);
            return [4 /*yield*/, knex_1.knex(constants_1.machine_table)
                    .where(req.params)
                    .update(req.body)
                    .returning("*")
                    .then(function (data) { return res.status(201).send(data); })
                    .catch(function (err) {
                    console.error(pg_error_codes_1.default[err.code]);
                    res.status(400).send(pg_error_codes_1.default[err.code]);
                })];
            case 1:
                //   console.log(req.params);
                //   console.log(req.body);
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.edit_machine = edit_machine;
// DELETE /machine/delete/:id
var delete_machine = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, knex_1.knex(constants_1.machine_table)
                    .where(req.params)
                    .del()
                    .returning("*")
                    .then(function (data) { return res.status(200).send(data); })
                    .catch(function (err) {
                    console.error(pg_error_codes_1.default[err.code]);
                    res.status(400).send(pg_error_codes_1.default[err.code]);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.delete_machine = delete_machine;
//# sourceMappingURL=machine.controller.js.map