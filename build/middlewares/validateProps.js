"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProps = void 0;
const express_validator_1 = require("express-validator");
const validateProps = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validateProps = validateProps;
