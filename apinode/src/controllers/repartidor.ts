import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { join } from "path";

const prisma = new PrismaClient();
export const tiposdenvio =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.nomestadoenvio.count();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}