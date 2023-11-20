import { Pool } from "pg";
export const con = new Pool({
    user: 'postgres',
    host: '172.22.48.1',
    password: 'postgres',
    database: 'apiportafolio',
    port: 5432
});