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
class DriverController {
    constructor(driverRepository, truckRepository) {
        this.driverRepository = driverRepository;
        this.truckRepository = truckRepository;
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { driver } = request.body;
            const truck = yield this.truckRepository.findOneByLicensePlate(driver.licensePlate);
            if (!truck) {
                return response.sendStatus(204);
            }
            const driverEntity = yield this.driverRepository.create(Object.assign(Object.assign({}, driver), { trucks: [truck] }));
            const r = yield this.driverRepository.save(driverEntity);
            return response.send(r).status(200);
        });
    }
}
exports.default = DriverController;
//# sourceMappingURL=driverController.js.map