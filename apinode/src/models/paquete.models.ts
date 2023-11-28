import { envio, paquete, repartidor  } from "@prisma/client"
import { prisma } from "../index";
import jwt from "jsonwebtoken";
import { encriptarcontrasenna } from "../lib/validaciones";
import { equal } from "joi";
import { isNumberObject } from "util/types";
class Paquete {
    
    addpaquete = async (paquete: paquete): Promise<paquete>=> {
        
        let rep =await prisma.paquete.create({
            data:{    
            }});
        return rep;                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    listarpaquetes = async (idpaquete: number|null): Promise<paquete[]> => {
        let id: number|null= idpaquete;
        let paquetes : paquete[];
        if(id){
            paquetes  = await prisma.paquete.findMany({
                where: {
                    idpaquete: id
                },
                include: {
                    envio:true,
                    nomestadopaquete:true,
                    proveedor: true
                }
            });
        }else{
                paquetes = await prisma.paquete.findMany({
                    include: {
                    envio:true,
                    nomestadopaquete:true,
                    proveedor: true
                }
                }); 
        }
        return paquetes;
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
    
    listarpaquetesbyidenvio =async (idenvio: number):Promise<paquete[]> => {
       
        let paquete: paquete[] = await prisma.paquete.findMany({
            include: {
                nomestadopaquete : true,
                envio:{
                    include:{
                        repartidor: true
                    }
                },
            },
            where:{
                envio:{
                    idenvio: idenvio
                }
            }
        });
        //console.log(envios);
        return paquete;
    }
}
export default Paquete;




