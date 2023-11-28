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
const index_1 = require("../index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validaciones_1 = require("../lib/validaciones");
class Proveedor {
    constructor() {
        this.addproveedores = (proveedor) => __awaiter(this, void 0, void 0, function* () {
            var res = new Date();
            res.setDate(res.getDate() + 30);
            let token = jsonwebtoken_1.default.sign({ user: proveedor.usuario, fecha: new Date() }, process.env.SECRET_TOKEN || 'webToken');
            let pass = yield (0, validaciones_1.encriptarcontrasenna)(proveedor.password);
            let rep = yield index_1.prisma.proveedor.create({
                data: {
                    nombre: proveedor.nombre,
                    apellidos: proveedor.apellidos,
                    telefono: proveedor.telefono,
                    usuario: proveedor.usuario,
                    password: pass,
                    jwt: token
                }
            });
            return rep;
        });
        this.listarproveedores = () => __awaiter(this, void 0, void 0, function* () {
            const proveedores = yield index_1.prisma.proveedor.findMany({});
            return proveedores;
        });
        this.listarenvios = () => __awaiter(this, void 0, void 0, function* () {
            console.log('6467');
            let envios = yield index_1.prisma.envio.findMany({
                where: {
                    idestadoenvio: { in: [1] }
                },
                include: {
                    nomestadoenvio: true,
                    paquete: true,
                    repartidor: true
                }
            });
            //console.log(envios);
            return envios;
        });
    }
}
exports.default = Proveedor;
