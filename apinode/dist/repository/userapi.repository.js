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
const apiuser_1 = __importDefault(require("../models/apiuser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class UserApiIRepository {
    nuevousuario(apiuser) {
        return __awaiter(this, void 0, void 0, function* () {
            var res = new Date();
            res.setDate(res.getDate() + 30);
            let token = jsonwebtoken_1.default.sign({ user: apiuser.userapi, fecha: new Date() }, process.env.SECRET_TOKEN || 'webToken');
            console.log(token);
            try {
                let p = yield this.encriptarcontrasenna(apiuser.contrasenna);
                const user = yield apiuser_1.default.create({
                    userapi: apiuser.userapi,
                    contrasenna: p,
                    jwebtoken: token,
                    fechaactualizacion: new Date(),
                    fechavencimiento: res,
                    activo: true
                });
                return user;
            }
            catch (error) {
                throw new Error("" + error);
            }
        });
    }
    eliminarusuario(userapi) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filaeliminada = yield apiuser_1.default.destroy({ where: { userapi: userapi } });
                return filaeliminada;
            }
            catch (error) {
                throw new Error("" + error);
            }
        });
    }
    actualizarusuario(apiuser) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userapi } = apiuser;
            const user = apiuser_1.default.findOne({ where: { userapi: userapi } });
            if (!user)
                return null;
            var res = new Date();
            var activo = true;
            res.setDate(res.getDate() + 30);
            let token = jsonwebtoken_1.default.sign({ user: apiuser.userapi, fecha: new Date() }, process.env.SECRET_TOKEN || 'webToken');
            try {
                const filaactualizada = yield apiuser_1.default.update({ jwebtoken: token, res, activo }, { where: { userapi: userapi } });
                return yield apiuser_1.default.findOne({ where: { userapi: userapi } });
                //return user;
            }
            catch (error) {
                throw new Error("" + error);
            }
        });
    }
    encriptarcontrasenna(contrasenna) {
        return __awaiter(this, void 0, void 0, function* () {
            const basecrypt = yield bcryptjs_1.default.genSalt(10);
            return yield bcryptjs_1.default.hash(contrasenna, basecrypt);
        });
    }
    validarcontrasenna(contrasenna, usercontrasenna) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(contrasenna, usercontrasenna);
        });
    }
}
exports.default = new UserApiIRepository();
