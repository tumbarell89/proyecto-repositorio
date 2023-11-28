import { envio, proveedor, repartidor  } from "@prisma/client"
import { prisma } from "../index";
import jwt from "jsonwebtoken";
import { encriptarcontrasenna } from "../lib/validaciones";
import { AutoIncrement } from "sequelize-typescript";

class Proveedor {
    
    addproveedores = async (proveedor: proveedor): Promise<proveedor>=> {
        var res = new Date();
        res.setDate(res.getDate() + 30);
        let token = jwt.sign({user: proveedor.usuario, fecha: new Date()}, process.env.SECRET_TOKEN ||'webToken');
        let pass: string = await encriptarcontrasenna(proveedor.password) as string;
        let rep =await prisma.proveedor.create({
            data:{
                nombre: proveedor.nombre,
                apellidos: proveedor.apellidos,
                telefono: proveedor.telefono,
                usuario: proveedor.usuario,
                password: pass,
                jwt: token    
            }});
        return rep;                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    }

    listarproveedores = async (): Promise<proveedor[]> => {
        const proveedores : proveedor[] = await prisma.proveedor.findMany({
        });
        return proveedores;
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
export default Proveedor;
