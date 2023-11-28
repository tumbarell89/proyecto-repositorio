import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Paquete from "../models/paquete.models";
const prisma = new PrismaClient();

export const paquetes =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}

export const addpaquete =async (req: Request, res:Response):Promise<Response> => {
    let paquetes= new Paquete();
    let result = await paquetes.addpaquete(req.body);
    return res.status(200).json({'result': result});
    
}

export const estadopaquete =async (req: Request, res:Response):Promise<Response> => {
    let paquetes= new Paquete();
    let result = await paquetes.listarpaquetes(parseInt(req.params.idpaquete));
    return res.status(200).json({'result': result});
    
}

export const listarpaquetesbyidenvio =async (req: Request, res:Response):Promise<Response> => {
    let paquetes= new Paquete();
    let result = await paquetes.listarpaquetesbyidenvio(parseInt(req.params.idenvio));
    return res.status(200).json({'result': result});
    
}