"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseAndLogger = void 0;
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const colors = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white",
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const transports = [
    new winston_1.default.transports.Console(),
    new winston_1.default.transports.DailyRotateFile({
        filename: "./logs/log-%DATE%.log",
        datePattern: "YYYY-MM-DD",
        level: process.env.LOGGING_FILE_LEVEL || "info",
        maxFiles: process.env.LOGGING_RETENTION || "30d",
    }),
];
function responseAndLogger(res, message, status = 500) {
    if (status >= 500) {
        logger.error(`${message} (${status})`);
    }
    else {
        logger.warn(`${message} (${status})`);
    }
    res.status(status).send({ message });
}
exports.responseAndLogger = responseAndLogger;
const logger = winston_1.default.createLogger({
    level: process.env.LOGGING_LEVEL || "info",
    levels,
    format,
    transports,
});
exports.default = logger;
