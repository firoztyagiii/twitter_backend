"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const errorController_1 = __importDefault(require("./controller/errorController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/user", userRoutes_1.default);
app.use(errorController_1.default);
exports.default = app;
