import { envio, repartidor  } from "@prisma/client"
import { prisma } from "../index";
import jwt from "jsonwebtoken";
import { encriptarcontrasenna } from "../lib/validaciones";
class Repartidor {
    
    addrepartidores = async (repartidor: repartidor): Promise<repartidor>=> {
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
    
    listarenvios =async ():Promise<envio[]> => {
        console.log('6467');
        let envios: envio[]= await prisma.envio.findMany({
            where: {
                idestadoenvio: {in:[1]}
            },
            include: {
                nomestadoenvio : true,
                paquete: true,
                repartidor: true
            }
        });
        //console.log(envios);
        return envios;
    }
}
export default Repartidor;
