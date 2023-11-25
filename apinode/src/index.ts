import express, { urlencoded } from "express";
import cors from "cors";
import swagger from "swagger-ui-express";
import swaggerdocs from "swagger-jsdoc";
import { opciones } from "./swagger";
import rutas from './routes/rutas';
import dotenv from "dotenv";
import morgan from "morgan";
import logger from "./lib/registrylog";
import { PrismaClient } from "@prisma/client";
dotenv.config();

console.log(process.env.PORTBD);

const app = express();
export const prisma = new PrismaClient();
async function checkDatabaseConnection() {
    try {
      await prisma.$connect();
      console.log('La conexión a la base de datos se ha establecido correctamente.');
      // Aquí puedes iniciar tu API u otras operaciones después de que se haya establecido la conexión
    } catch (error) {
      console.error('Error al conectar con la base de datos:', error);
      // Aquí puedes manejar el error de conexión, como cerrar la aplicación o mostrar un mensaje de error
    } finally {
      await prisma.$disconnect();
      console.log('La conexión a la base de datos se ha cerrado.');
    }
}
app.set('port', process.env.PORT);


//middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(morgan('tiny', { stream: { write: (m) => logger.http(m.split('\n')[0]) } }));
  
const especificaciones = swaggerdocs(opciones);

app.use(rutas);
app.use('/', swagger.serve, swagger.setup(especificaciones));

//export default app;
app.listen(process.env.PORT);
console.log(checkDatabaseConnection());

console.log('Servidor ejecutando en el puerto', process.env.PORT);

