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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const env_1 = require("./config/env");
const cursor_1 = require("./database/cursor");
const cors = require("cors");
const routes_1 = require("./routes");
// create and setup express app
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    const cursor = new cursor_1.default();
    yield cursor.connect();
    app.use(express.json());
    app.use(cors());
    app.use((0, routes_1.default)(cursor));
    app.listen(env_1.default.serverParams.port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${env_1.default.serverParams.port}`);
    });
}))();
//# sourceMappingURL=app.js.map