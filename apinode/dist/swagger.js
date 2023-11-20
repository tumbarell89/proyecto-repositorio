"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.opciones = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.opciones = {
    swagger: "2.0",
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Api Portafolio productos',
            version: '1.0.0',
            description: "Api rest construida con express, typescript en nodejs con conexion a base de datos postgres"
        },
        servers: [
            {
                url: "http://localhost:" + process.env.PORT + "/"
            }
        ]
    },
    apis: ["./src/routes/rutas.ts"]
};
