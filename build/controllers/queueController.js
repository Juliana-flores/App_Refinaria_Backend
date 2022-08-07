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
const date_fns_1 = require("date-fns");
class QueueController {
    constructor(queueRepository, truckRepository, timeRangeRepository) {
        this.timeRangeRepository = timeRangeRepository;
        this.queueRepository = queueRepository;
        this.truckRepository = truckRepository;
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { queue } = request.body;
            if (!queue.timeRangeId || queue.truckId) {
                return response.sendStatus(400);
            }
            const truck = yield this.truckRepository.findOne(queue.truckId);
            if (!truck) {
                return response.sendStatus(204);
            }
            const intervals = yield this.timeRangeRepository.findByCurrentInterval(queue.timeRangeId);
            const createdAt = new Date();
            const currentInterval = intervals.find((interval) => (0, date_fns_1.isWithinInterval)(createdAt, interval));
            if (!currentInterval) {
                return response.sendStatus(400);
            }
            const queueEntity = yield this.queueRepository.create({
                trucks: truck,
            });
            const r = yield this.queueRepository.save(queueEntity);
            return response.send(r).status(200);
        });
    }
}
exports.default = QueueController;
//# sourceMappingURL=queueController.js.map