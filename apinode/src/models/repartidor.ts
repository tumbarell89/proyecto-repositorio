import { PrismaClient, envio, repartidor  } from "@prisma/client"
import { proveedores } from "../controllers/proveedores"
import { prisma } from "../index";
import { number, string } from "joi";
import jwt from "jsonwebtoken";
import { encriptarcontrasenna } from "../lib/validaciones";
import { NotIn } from "sequelize-typescript";
import { notEqual } from "assert";

class Repartidor {
    /*private listaenvios:[{
        nomestadoenvio: {
            denominacion: String
        },
        paquete: {
            lugarentrega: String,
            lugarrecogida: String,
            datoscliete: String
        }}]= null;*/
    
    addproveedores = async (repartidor: repartidor): Promise<repartidor>=> {
        var res = new Date();
        res.setDate(res.getDate() + 30);
        let token = jwt.sign({user: repartidor.usuario, fecha: new Date()}, process.env.SECRET_TOKEN ||'webToken');
        let pass: string = await encriptarcontrasenna(repartidor.password) as string;
        let rep =await prisma.repartidor.create({
            data:{
                nombre: repartidor.nombre,
                apellidos: repartidor.apellidos,
                telefono: repartidor.telefono,
                usuario: repartidor.usuario,
                password: pass,
                cantpaquetes: repartidor.cantpaquetes,
                idestadorepartidor: 1,
                jwt: token    
            }});
        return rep;                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    listarrepartidores = async (): Promise<repartidor[]> => {
        const repartidores : repartidor[] = await prisma.repartidor.findMany({
            where: {
                idestadorepartidor: {not: 2}
            }
        });
        return repartidores;
    }
    
    listarenvios =async ():Promise<Array<any>> => {
        console.log('6467');
        let envios: Array<any>= await prisma.envio.findMany({
            where: {
                idestadoenvio: {in:[1]}
            },
            select: {
                nomestadoenvio: {
                    select:{
                        denominacion: true
                    }
                },
                paquete:{
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
    }
}
export default Repartidor;




