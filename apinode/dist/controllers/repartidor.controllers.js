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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addrepartidor = exports.repartidores = exports.tiposdenvio = void 0;
const client_1 = require("@prisma/client");
const repartidor_models_1 = __importDefault(require("../models/repartidor.models."));
const prisma = new client_1.PrismaClient();
const tiposdenvio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let tiposenvios = yield prisma.nomestadoenvio.count();
    return res.status(200).json({ 'tiposenvios': tiposenvios });
});
exports.tiposdenvio = tiposdenvio;
const repartidores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let repart = new repartidor_models_1.default();
    let result = yield repart.listarrepartidores();
    return res.status(200).json({ 'data': result });
});
exports.repartidores = repartidores;
const addrepartidor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let rep = req.body;
    let repart = new repartidor_models_1.default();
    let result = yield repart.addrepartidores(rep);
    return res.status(200).json({ 'repartidor': result });
});
exports.addrepartidor = addrepartidor;
