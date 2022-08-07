"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
const compare = (password, hash) => {
    if (!password || !hash) {
        return false;
    }
    if (typeof password != 'string' || typeof hash != 'string') {
        return false;
    }
    return password === hash;
};
exports.compare = compare;
//# sourceMappingURL=password.js.map