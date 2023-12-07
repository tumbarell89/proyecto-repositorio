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
exports.encriptarcontrasenna = exports.vRegistrarEnvio = exports.vRegistrarPaquete = exports.vPorEnvio = exports.vEstadoPaquete = exports.vRegistrarRepartidor = exports.vRegistrarProveedor = exports.vTokenAcceso = void 0;
const joi_1 = __importDefault(require("joi"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function vTokenAcceso(req, res, next) {
    console.log('validacion token de acceso');
    next();
}
exports.vTokenAcceso = vTokenAcceso;
function vRegistrarProveedor(req, res, next) {
    console.log('validacion registro');
    const validaschema = joi_1.default.object({
        nombre: joi_1.default.string().max(255).required(),
        apellidos: joi_1.default.string().max(255).required(),
        telefono: joi_1.default.string().required(),
        usuario: joi_1.default.string().required(),
        password: joi_1.default.string().required()
    }).options({ abortEarly: false });
    let proveedor = req.body;
    console.log(proveedor);
    let valid = validaschema.validate(proveedor);
    console.log(valid);
    if (valid.error)
        throw new Error("Error: data " + valid.error);
    next();
}
exports.vRegistrarProveedor = vRegistrarProveedor;
function vRegistrarRepartidor(req, res, next) {
    console.log('validacion registro');
    const validaschema = joi_1.default.object({
        nombre: joi_1.default.string().max(255).required(),
        apellidos: joi_1.default.string().max(255).required(),
        telefono: joi_1.default.string().required(),
        usuario: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        cantpaquetes: joi_1.default.number().min(1)
    }).options({ abortEarly: false });
    let repartidor = req.body;
    console.log(repartidor);
    let valid = validaschema.validate(repartidor);
    console.log(valid);
    if (valid.error)
        throw new Error("Error: data " + valid.error);
    next();
}
exports.vRegistrarRepartidor = vRegistrarRepartidor;
function vEstadoPaquete(req, res, next) {
    let idpaque = req.params;
    const validaschema = joi_1.default.object({
        idpaquete: joi_1.default.number().required()
    });
    let valid = validaschema.validate(idpaque);
    if (valid.error)
        throw new Error("Error: data " + valid.error);
    next();
}
exports.vEstadoPaquete = vEstadoPaquete;
function vPorEnvio(req, res, next) {
    let idenvio = req.params;
    const validaschema = joi_1.default.object({
        idenvio: joi_1.default.number().required()
    });
    let valid = validaschema.validate(idenvio);
    if (valid.error)
        throw new Error("Error: data " + valid.error);
    next();
}
exports.vPorEnvio = vPorEnvio;
function vRegistrarPaquete(req, res, next) {
    console.log('validacion vRegistrarPaquete');
    let paquet = req.body;
    const validaschema = joi_1.default.object({
        lugarrecogida: joi_1.default.string().required(),
        municipioregida: joi_1.default.string().required(),
        barriorecogida: joi_1.default.string().required(),
        lugarentrega: joi_1.default.string().required(),
        municipioentrega: joi_1.default.string().required(),
        barrioentrega: joi_1.default.string().required(),
        datoscliente: joi_1.default.string().required(),
        peso: joi_1.default.number().min(0.1).required(),
        idproveedor: joi_1.default.number().required()
    });
    let valid = validaschema.validate(paquet);
    if (valid.error)
        throw new Error("Error: data " + valid.error);
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
