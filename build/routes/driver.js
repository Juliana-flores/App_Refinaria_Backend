"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repos_1 = require("../repos");
const controllers_1 = require("../controllers");
const express_1 = require("express");
exports.default = (cursor) => {
    const driverRepository = new repos_1.DriverRepository(cursor);
    const truckRepository = new repos_1.TruckRepository(cursor);
    const controller = new controllers_1.DriverController(driverRepository, truckRepository);
    const router = (0, express_1.Router)();
    router.put('/driver', controller.create.bind(controller));
    return router;
};
//# sourceMappingURL=driver.js.map