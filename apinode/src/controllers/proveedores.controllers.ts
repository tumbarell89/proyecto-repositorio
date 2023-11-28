import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import Proveedor from "../models/proveedor.models";
const prisma = new PrismaClient();

export const proveedores =async (req: Request, res:Response):Promise<Response> => {
    let tiposenvios = await prisma.proveedor.findMany();
    return res.status(200).json({'tiposenvios': tiposenvios});
    
}

export const addproveedores =async (req: Request, res:Response):Promise<Response> => {
    let proveedor = new Proveedor();
    let result = await proveedor.addproveedores(req.body);
    return res.status(200).json({'proveedor': result});
    
}