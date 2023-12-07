import { Response, Request, NextFunction } from "express";
import Joi from "joi";
import encriptador from "bcryptjs";

export function vTokenAcceso (req: Request, res:Response, next: NextFunction){
    console.log('validacion token de acceso');
    next();
}

export function vRegistrarProveedor (req: Request, res:Response, next: NextFunction){
    console.log('validacion registro');
    const validaschema = Joi.object({
        nombre: Joi.string().max(255).required(),
        apellidos: Joi.string().max(255).required(),
        telefono: Joi.string().required(),
        usuario: Joi.string().required(),
        password: Joi.string().required()
    }).options({ abortEarly: false });

    let proveedor: {  nombre : String,
                        apellidos: String,
                        telefono: String,
                        usuario: String,
                        password: String
                }= req.body;

    console.log(proveedor);

    let valid = validaschema.validate(proveedor);
    console.log(valid);
    
    if(valid.error) throw new Error("Error: data "+valid.error);

    next();
}

export function vRegistrarRepartidor (req: Request, res:Response, next: NextFunction){
    console.log('validacion registro');
    const validaschema = Joi.object({
        nombre: Joi.string().max(255).required(),
        apellidos: Joi.string().max(255).required(),
        telefono: Joi.string().required(),
        usuario: Joi.string().required(),
        password: Joi.string().required(),
        cantpaquetes: Joi.number().min(1)
    }).options({ abortEarly: false });

    let repartidor: {  nombre : String,
                        apellidos: String,
                        telefono: String,
                        usuario: String,
                        password: String
                }= req.body;

    console.log(repartidor);

    let valid = validaschema.validate(repartidor);
    console.log(valid);
    
    if(valid.error) throw new Error("Error: data "+valid.error);

    next();
}

export function vEstadoPaquete(req: Request, res:Response, next: NextFunction){
    let idpaque  = req.params;
    const validaschema =  Joi.object({
        idpaquete: Joi.number().required()
    });
    let valid = validaschema.validate(idpaque);
    
    if(valid.error) throw new Error("Error: data "+valid.error);

    next();

}

export function vPorEnvio(req: Request, res:Response, next: NextFunction){
    let idenvio  = req.params;
    const validaschema =  Joi.object({
        idenvio: Joi.number().required()
    });
    let valid = validaschema.validate(idenvio);
    
    if(valid.error) throw new Error("Error: data "+valid.error);

    next();

}

export function vRegistrarPaquete(req: Request, res:Response, next: NextFunction){
    console.log('validacion vRegistrarPaquete');
    let paquet : {
        lugarrecogida :   String,
        municipioregida : String,
        barriorecogida :  String,
        lugarentrega    : String,
        municipioentrega :String,
        barrioentrega    :String,
        datoscliente     :String,
        peso             :number,
        idproveedor: number
    } = req.body;

    const validaschema =  Joi.object({        
        lugarrecogida :   Joi.string().required(),
        municipioregida : Joi.string().required(),
        barriorecogida :  Joi.string().required(),
        lugarentrega    : Joi.string().required(),
        municipioentrega :Joi.string().required(),
        barrioentrega    :Joi.string().required(),
        datoscliente     :Joi.string().required(),
        peso             :Joi.number().min(0.1).required(),
        idproveedor: Joi.number().required()
    });
    let valid = validaschema.validate(paquet);
    
    if(valid.error) throw new Error("Error: data "+valid.error);

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