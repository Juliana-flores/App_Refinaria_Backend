"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repos_1 = require("../repos");
const controllers_1 = require("../controllers");
const express_1 = require("express");
exports.default = (cursor) => {
    const queueRepository = new repos_1.QueueRepository(cursor);
    const truckRepository = new repos_1.TruckRepository(cursor);
    const timeRangeRepository = new repos_1.TimeRangeRepository(cursor);
    const controller = new controllers_1.QueueController(queueRepository, truckRepository, timeRangeRepository);
    const router = (0, express_1.Router)();
    router.post('/queue', controller.create.bind(controller));
    return router;
};
//# sourceMappingURL=queue.js.map