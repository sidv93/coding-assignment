"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var http_status_1 = require("http-status");
var handleSuccess = function (payload, req, res, next) {
    if (payload instanceof utils_1.ApiSuccess) {
        return res.status(http_status_1.OK).json({
            status: 'success',
            message: payload.message,
            data: payload.data
        });
    }
    return next(payload);
};
exports.default = handleSuccess;
