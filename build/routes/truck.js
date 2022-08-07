"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const truckRepository_1 = require("../repos/truckRepository");
const express = require("express");
const truckController_1 = require("../controllers/truckController");
exports.default = (cursor) => {
    const truckRepository = new truckRepository_1.default(cursor);
    const controller = new truckController_1.default(truckRepository);
    const router = express.Router();
    router.post('/truck', controller.create.bind(controller));
    return router;
};
//# sourceMappingURL=truck.js.map