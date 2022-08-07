"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const templateRepository_1 = require("./templateRepository");
class QueueRepository extends templateRepository_1.default {
    constructor(cursor) {
        super(cursor, models_1.Queue);
    }
}
exports.default = QueueRepository;
//# sourceMappingURL=queueRepository.js.map