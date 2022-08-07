"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const models_1 = require("../models/");
let VirtualQueue = class VirtualQueue {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VirtualQueue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], VirtualQueue.prototype, "ticketNumber", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => models_1.Truck),
    __metadata("design:type", models_1.Truck)
], VirtualQueue.prototype, "truck", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => models_1.Queue),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", models_1.Queue)
], VirtualQueue.prototype, "queueId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", String)
], VirtualQueue.prototype, "timestamp", void 0);
VirtualQueue = __decorate([
    (0, typeorm_1.Entity)()
], VirtualQueue);
exports.default = VirtualQueue;
//# sourceMappingURL=virtualqueue.js.map