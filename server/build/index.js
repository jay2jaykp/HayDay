"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var routes_1 = require("./api/routes");
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.PORT;
// body parser middleware
app.use(express_1.default.json());
// logger middleware
app.use(morgan_1.default("tiny"));
if (process.env.NODE_ENV === "development") {
    console.log("This is a dev environment");
    app.use(cors_1.default());
}
app.use("/hayday", routes_1.hayday);
app.listen(port, function () {
    console.log("Server is listening on http://localhost:" + port);
});
//# sourceMappingURL=index.js.map