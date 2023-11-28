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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
class Paquete {
    constructor() {
        this.addpaquete = (paquete) => __awaiter(this, void 0, void 0, function* () {
            let rep = yield index_1.prisma.paquete.create({
                data: {}
            });
            return rep;
        });
        this.listarpaquetes = (idpaquete) => __awaiter(this, void 0, void 0, function* () {
            let id = idpaquete;
            let paquetes;
            if (id) {
                paquetes = yield index_1.prisma.paquete.findMany({
                    where: {
                        idpaquete: id
                    },
                    include: {
                        envio: true,
                        nomestadopaquete: true,
                        proveedor: true
                    }
                });
            }
            else {
                paquetes = yield index_1.prisma.paquete.findMany({
                    include: {
                        envio: true,
                        nomestadopaquete: true,
                        proveedor: true
                    }
                });
            }
            return paquetes;
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
        this.listarpaquetesbyidenvio = (idenvio) => __awaiter(this, void 0, void 0, function* () {
            let paquete = yield index_1.prisma.paquete.findMany({
                include: {
                    nomestadopaquete: true,
                    envio: {
                        include: {
                            repartidor: true
                        }
                    },
                },
                where: {
                    envio: {
                        idenvio: idenvio
                    }
                }
            });
            //console.log(envios);
            return paquete;
        });
    }
}
exports.default = Paquete;
