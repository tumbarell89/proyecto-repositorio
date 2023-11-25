import { Response, Request, NextFunction } from "express";
import Joi from "joi";
import encriptador from "bcryptjs";

export function vTokenAcceso (req: Request, res:Response, next: NextFunction){
    console.log('validacion token de acceso');
    next();
}

export function vRegistrarPersona (req: Request, res:Response, next: NextFunction){
    console.log('validacion registro');
    const validaschema = Joi.object({
        nombre: Joi.string().max(255).required(),
        apellidos: Joi.string().max(255).required(),
        telefono: Joi.string().required(),
        usuario: Joi.string().required(),
        password: Joi.string().required()
    })
    let repartidor: {  nombre : String,
                        apellidos: String,
                        telefono: String,
                        usuario: String,
                        password: String
                }= req.body;

    let valid = validaschema.validate(repartidor);
    
    if(valid) throw new Error("Error: data "+valid.error);

    next();
}


export function vRegistrarPaquete(req: Request, res:Response, next: NextFunction){
    console.log('validacion vRegistrarPaquete');
    next();
}

export function vRegistrarEnvio(req: Request, res:Response, next: NextFunction){
    console.log('validacion vRegistrarPaquete');
    next();
}

export const encriptarcontrasenna = async (contrasenna: string):Promise<String>=> {
    const basecrypt = await encriptador.genSalt(10);
    return await encriptador.hash(contrasenna, basecrypt);
}