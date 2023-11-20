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
exports.register = exports.loggout = exports.loggin = exports.actualizarusuario = void 0;
const apiuser_1 = __importDefault(require("../models/apiuser"));
const userapi_repository_1 = __importDefault(require("../repository/userapi.repository"));
const actualizarusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userapi)
        return res.status(400).send({ message: "El nombre de usuario es obligatorio" });
    try {
        const apiuser = req.body;
        const apiuserrepository = yield userapi_repository_1.default.actualizarusuario(apiuser);
        if (apiuserrepository)
            return res.status(200).json({ "jwebtoken": apiuserrepository.jwebtoken, "fecha vencimiento": apiuserrepository.fechavencimiento });
        else
            return res.status(400).json({ mensage: 'Usuario no encontrado' });
    }
    catch (error) {
        return res.status(500).send(('Error: ' + error));
    }
});
exports.actualizarusuario = actualizarusuario;
const loggin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userapi || !req.body.contrasenna)
        return res.status(400).send({ message: "El nombre de usuario y la contraseña son campos obligatorio" });
    const user = yield apiuser_1.default.findOne({ where: { userapi: req.body.userapi } });
    if (!user)
        return res.status(401).send({ message: "El nombre de usuario o la contraseña pueden estar incorrecto" });
    const correctpass = yield userapi_repository_1.default.validarcontrasenna(req.body.contrasenna, user.contrasenna);
    if (!correctpass)
        return res.status(401).send({ message: "El nombre de usuario o la contraseña pueden estar incorrecto" });
    console.log(correctpass);
    console.log(user);
    return res.status(200).json({ "mensaje": 'Acceso correcto', "token": user.jwebtoken });
});
exports.loggin = loggin;
const loggout = (req, res) => {
};
exports.loggout = loggout;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.userapi || !req.body.contrasenna)
        return res.status(400).send({ message: "El nombre de usuario y la contraseña son campos obligatorio" });
    const user = yield apiuser_1.default.findOne({ where: { userapi: req.body.userapi } });
    console.log(user);
    if (user)
        return res.status(401).send({ message: 'El usuario ya existe' });
    try {
        const apiuser = req.body;
        const apiuserrepository = yield userapi_repository_1.default.nuevousuario(apiuser);
        return res.status(200).json({ "jwebtoken": apiuserrepository.jwebtoken, "fecha vencimiento": apiuserrepository.fechavencimiento });
    }
    catch (error) {
        return res.status(500).send('Error: ' + error);
    }
});
exports.register = register;
