import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const paquetes =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}

export const addpaquete =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}