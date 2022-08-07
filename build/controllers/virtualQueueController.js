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
class VirtualQueueController {
    constructor(virtualQueueRepository, truckRepository, queueRepository) {
        this.virtualQueueRepository = virtualQueueRepository;
        this.truckRepository = truckRepository;
        this.queueRepository = queueRepository;
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { virtualqueue } = request.body;
            if (!virtualqueue || !virtualqueue.truckId) {
                return response.sendStatus(400);
            }
            const [truck, queue] = yield Promise.all([
                this.truckRepository.findOne(virtualqueue.truckId),
                this.queueRepository.findOne(virtualqueue.queueId),
            ]);
            if (!truck || !queue) {
                return response.sendStatus(400);
            }
            const virtualQueue = yield this.virtualQueueRepository.create({
                ticketNumber: virtualqueue.ticketNumber,
                truck,
                queue,
            });
            const r = yield this.virtualQueueRepository.save(virtualQueue);
            return response.send(r).status(200);
        });
    }
}
exports.default = VirtualQueueController;
//# sourceMappingURL=virtualQueueController.js.map