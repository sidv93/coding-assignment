"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiSuccess = void 0;
/**
 * Disabling eslint since we wouldn't be able to predict the type of
 * response from APIs
 */
var ApiSuccess = /** @class */ (function () {
    /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
    function ApiSuccess(message, data) {
        this.message = message;
        this.data = data;
    }
    return ApiSuccess;
}());
exports.ApiSuccess = ApiSuccess;
exports.default = ApiSuccess;
