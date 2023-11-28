import { PrismaClient, repartidor } from "@prisma/client";
import { Request, Response } from "express";
import { join } from "path";
import Repartidor from "../models/repartidor.models.";

const prisma = new PrismaClient();
export const tiposdenvio =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}

export const repartidores =async (req: Request, res:Response):Promise<Response> => {
    let repart = new Repartidor();
    let result= await repart.listarrepartidores();
    return res.status(200).json({'data': result});
    
}

export const addrepartidor =async (req: Request, res:Response):Promise<Response> => {
    let rep: repartidor= req.body;
    let repart = new Repartidor();
    let result= await repart.addrepartidores(rep);
    return res.status(200).json({'repartidor': result});    
}

