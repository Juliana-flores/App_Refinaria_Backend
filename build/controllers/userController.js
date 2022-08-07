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
const password_1 = require("../helpers/password");
const jsonwebtoken_1 = require("jsonwebtoken");
class UserController {
    constructor(driverRepository, truckRepository, serverParams) {
        this.driverRepository = driverRepository;
        this.truckRepository = truckRepository;
        this.secret = serverParams.secret;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.sendStatus(400);
            }
            const user = yield this.driverRepository.findByUsername(username);
            if (!user) {
                return res.sendStatus(404);
            }
            const match = (0, password_1.compare)(password, user.password);
            if (!match) {
                return res.sendStatus(403);
            }
            const token = (0, jsonwebtoken_1.sign)({
                document: user.document,
                name: user.name,
                id: user.id,
            }, this.secret, {
                expiresIn: '1h'
            });
            return res.status(200).json({
                token,
            });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map