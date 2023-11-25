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
class Repartidor {
    constructor() {
        /*private listaenvios:[{
            nomestadoenvio: {
                denominacion: String
            },
            paquete: {
                lugarentrega: String,
                lugarrecogida: String,
                datoscliete: String
            }}]= null;*/
        this.addproveedores = (repartidor) => __awaiter(this, void 0, void 0, function* () {
            var res = new Date();
            res.setDate(res.getDate() + 30);
            let token = jsonwebtoken_1.default.sign({ user: repartidor.usuario, fecha: new Date() }, process.env.SECRET_TOKEN || 'webToken');
            let pass = yield (0, validaciones_1.encriptarcontrasenna)(repartidor.password);
            let rep = yield index_1.prisma.repartidor.create({
                data: {
                    nombre: repartidor.nombre,
                    apellidos: repartidor.apellidos,
                    telefono: repartidor.telefono,
                    usuario: repartidor.usuario,
                    password: pass,
                    cantpaquetes: repartidor.cantpaquetes,
                    idestadorepartidor: 1,
                    jwt: token
                }
            });
            return rep;
        });
        this.listarrepartidores = () => __awaiter(this, void 0, void 0, function* () {
            const repartidores = yield index_1.prisma.repartidor.findMany({
                where: {
                    idestadorepartidor: { not: 2 }
                }
            });
            return repartidores;
        });
        this.listarenvios = () => __awaiter(this, void 0, void 0, function* () {
            console.log('6467');
            let envios = yield index_1.prisma.envio.findMany({
                where: {
                    idestadoenvio: { in: [1] }
                },
                select: {
                    nomestadoenvio: {
                        select: {
                            denominacion: true
                        }
                    },
                    paquete: {
                        select: {
                            lugarentrega: true,
                            lugarrecogida: true,
                            datoscliente: true
                        }
                    }
                }
            });
            console.log(envios);
            return envios;
        });
    }
}
exports.default = Repartidor;
