import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Repartidor from "../models/repartidor";
const prisma = new PrismaClient();

export const envios = async (req: Request, res:Response):Promise<Response> => {
    let repart = new Repartidor();
    let envios= await repart.listarenvios();
    return res.status(200).json({'envios': envios});
    
}

export const addenvio =async (req: Request, res:Response):Promise<Response> => {
    console.log('sfsdf');
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}