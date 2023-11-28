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
exports.listarpaquetesbyidenvio = exports.estadopaquete = exports.addpaquete = exports.paquetes = void 0;
const client_1 = require("@prisma/client");
const paquete_models_1 = __importDefault(require("../models/paquete.models"));
const prisma = new client_1.PrismaClient();
const paquetes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let tiposenvios = yield prisma.nomestadoenvio.count();
    return res.status(200).json({ 'tiposenvios': tiposenvios });
});
exports.paquetes = paquetes;
const addpaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let paquetes = new paquete_models_1.default();
    let result = yield paquetes.addpaquete(req.body);
    return res.status(200).json({ 'result': result });
});
exports.addpaquete = addpaquete;
const estadopaquete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let paquetes = new paquete_models_1.default();
    let result = yield paquetes.listarpaquetes(parseInt(req.params.idpaquete));
    return res.status(200).json({ 'result': result });
});
exports.estadopaquete = estadopaquete;
const listarpaquetesbyidenvio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let paquetes = new paquete_models_1.default();
    let result = yield paquetes.listarpaquetesbyidenvio(parseInt(req.params.idenvio));
    return res.status(200).json({ 'result': result });
});
exports.listarpaquetesbyidenvio = listarpaquetesbyidenvio;
