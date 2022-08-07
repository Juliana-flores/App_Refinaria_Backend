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
class TruckController {
    constructor(truckRepository) {
        this.truckRepository = truckRepository;
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { truck } = request.body;
            const truckEntity = yield this.truckRepository.create(Object.assign({}, truck));
            const r = yield this.truckRepository.save(truckEntity);
            return response.send(r).status(200);
        });
    }
}
exports.default = TruckController;
//# sourceMappingURL=truckController.js.map