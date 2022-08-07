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
const models_1 = require("../models");
const date_fns_1 = require("date-fns");
const templateRepository_1 = require("./templateRepository");
class TimeRangeRepository extends templateRepository_1.default {
    constructor(cursor) {
        super(cursor, models_1.TimeRange);
    }
    findByCurrentInterval(currentInterval) {
        return __awaiter(this, void 0, void 0, function* () {
            let [firstInterval, secondInterval] = yield this.repository.find({
                where: [
                    { id: currentInterval },
                    { id: currentInterval + 1 },
                ]
            });
            if (!secondInterval) {
                [secondInterval] = yield this.repository.find({
                    where: { id: 6 },
                });
            }
            return [firstInterval, secondInterval].map(({ start, end }) => ({
                start: (0, date_fns_1.parse)(start, 'HH:mm', new Date()),
                end: (0, date_fns_1.parse)(end, 'HH:mm', new Date()),
            }));
        });
    }
}
exports.default = TimeRangeRepository;
//# sourceMappingURL=timerangeRepository.js.map