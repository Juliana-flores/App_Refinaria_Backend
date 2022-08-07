"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virtualqueue_1 = require("./virtualqueue");
const driver_1 = require("./driver");
const truck_1 = require("./truck");
const queue_1 = require("./queue");
const user_1 = require("./user");
const env_1 = require("../config/env");
const express = require("express");
exports.default = (cursor) => {
    const router = express.Router();
    router.get('/', (req, res) => res.sendStatus(200));
    router.use('/user', (0, user_1.default)(cursor, env_1.default));
    router.use((0, driver_1.default)(cursor));
    router.use((0, queue_1.default)(cursor));
    router.use((0, truck_1.default)(cursor));
    router.use((0, virtualqueue_1.default)(cursor));
    return router;
};
//# sourceMappingURL=index.js.map