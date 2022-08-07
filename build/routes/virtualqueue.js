"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repos_1 = require("../repos");
const controllers_1 = require("../controllers/");
const express_1 = require("express");
exports.default = (cursor) => {
    const virtualQueueRepository = new repos_1.VirtualQueueRepository(cursor);
    const truckRepository = new repos_1.TruckRepository(cursor);
    const queueRepository = new repos_1.QueueRepository(cursor);
    const controller = new controllers_1.VirtualQueueController(virtualQueueRepository, truckRepository, queueRepository);
    const router = (0, express_1.Router)();
    router.post('/virtualqueue', controller.create.bind(controller));
    return router;
};
//# sourceMappingURL=virtualqueue.js.map