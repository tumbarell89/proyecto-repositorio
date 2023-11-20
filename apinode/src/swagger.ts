import dotenv from "dotenv";
dotenv.config();
export const opciones = {
    swagger: "2.0",
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Api Portafolio productos',
            version: '1.0.0',
            description: "Api rest construida con express, typescript en nodejs con conexion a base de datos postgres"
        },
        servers: [
            {
                url: "http://localhost:"+process.env.PORT+"/"
            }          
        ]
    },
    apis: ["./src/routes/rutas.ts"]
}