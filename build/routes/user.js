"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driverRepository_1 = require("../repos/driverRepository");
const express = require("express");
const truckRepository_1 = require("../repos/truckRepository");
const userController_1 = require("../controllers/userController");
exports.default = (cursor, env) => {
    const { serverParams } = env;
    const driverRepository = new driverRepository_1.default(cursor);
    const truckRepository = new truckRepository_1.default(cursor);
    const controller = new userController_1.default(driverRepository, truckRepository, serverParams);
    const router = express.Router();
    router.post('/login', controller.login.bind(controller));
    return router;
};
//# sourceMappingURL=user.js.map