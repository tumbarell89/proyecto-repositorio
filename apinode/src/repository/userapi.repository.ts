import Apiuser from "../models/apiuser";
import jwt from "jsonwebtoken";
import encriptador from "bcryptjs";
import dotenv from "dotenv";
import { Hash } from "crypto";
dotenv.config();

interface IApiuserRepository {
    nuevousuario(apiuser: Apiuser): Promise<Apiuser>;
    eliminarusuario(userapi: String): Promise<Number>;
    actualizarusuario(apiuser: Apiuser): Promise<Apiuser| null>;
}

class UserApiIRepository implements IApiuserRepository{
    
    async nuevousuario(apiuser: Apiuser): Promise<Apiuser> {        
        var res = new Date();
        res.setDate(res.getDate() + 30);
        let token = jwt.sign({user: apiuser.userapi, fecha: new Date()}, process.env.SECRET_TOKEN ||'webToken');
        console.log(token);
        try {
            let p = await this.encriptarcontrasenna(apiuser.contrasenna as string);
           const user = await Apiuser.create({
            userapi: apiuser.userapi,
            contrasenna: p,
            jwebtoken: token,
            fechaactualizacion : new Date(),
            fechavencimiento: res,
            activo: true
          });

          return user;
        } catch (error) {
            throw new Error (""+error);
        }  
    }

    async eliminarusuario(userapi: String): Promise<Number> {
        try {
            const filaeliminada = await Apiuser.destroy({ where: {userapi: userapi}});
            return filaeliminada;
        } catch (error) {
            throw new Error(""+error);
        }        
    }
    
    async actualizarusuario(apiuser: Apiuser): Promise<Apiuser| null> {
        const {userapi} = apiuser;
        const user = Apiuser.findOne({where: {userapi: userapi}});
        if(!user) return null;

        var res = new Date();
        var activo = true;
        res.setDate(res.getDate() + 30);
        let token = jwt.sign({user: apiuser.userapi, fecha: new Date()}, process.env.SECRET_TOKEN ||'webToken');
        
        try {
            const filaactualizada = await Apiuser.update({jwebtoken: token, res, activo}, {where: {userapi: userapi}});            
            return await Apiuser.findOne({where: {userapi: userapi}});
            //return user;
        } catch (error) {
            throw new Error(""+error);
        }        
    }

    async encriptarcontrasenna (contrasenna: string):Promise<String> {
        const basecrypt = await encriptador.genSalt(10);
        return await encriptador.hash(contrasenna, basecrypt);
    }

    async validarcontrasenna (contrasenna: string, usercontrasenna: string):Promise<boolean> {        
        return await encriptador.compare(contrasenna, usercontrasenna);
    }
    
}
export default new UserApiIRepository();