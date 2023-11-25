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
exports.encriptarcontrasenna = exports.vRegistrarEnvio = exports.vRegistrarPaquete = exports.vRegistrarPersona = exports.vTokenAcceso = void 0;
const joi_1 = __importDefault(require("joi"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function vTokenAcceso(req, res, next) {
    console.log('validacion token de acceso');
    next();
}
exports.vTokenAcceso = vTokenAcceso;
function vRegistrarPersona(req, res, next) {
    console.log('validacion registro');
    const validaschema = joi_1.default.object({
        nombre: joi_1.default.string().max(255).required(),
        apellidos: joi_1.default.string().max(255).required(),
        telefono: joi_1.default.string().required(),
        usuario: joi_1.default.string().required(),
        password: joi_1.default.string().required()
    });
    let repartidor = req.body;
    let valid = validaschema.validate(repartidor);
    if (valid)
        throw new Error("Error: data " + valid.error);
    next();
}
exports.vRegistrarPersona = vRegistrarPersona;
function vRegistrarPaquete(req, res, next) {
    console.log('validacion vRegistrarPaquete');
    next();
}
exports.vRegistrarPaquete = vRegistrarPaquete;
function vRegistrarEnvio(req, res, next) {
    console.log('validacion vRegistrarPaquete');
    next();
}
exports.vRegistrarEnvio = vRegistrarEnvio;
const encriptarcontrasenna = (contrasenna) => __awaiter(void 0, void 0, void 0, function* () {
    const basecrypt = yield bcryptjs_1.default.genSalt(10);
    return yield bcryptjs_1.default.hash(contrasenna, basecrypt);
});
exports.encriptarcontrasenna = encriptarcontrasenna;
