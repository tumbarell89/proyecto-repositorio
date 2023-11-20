"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.con = void 0;
const pg_1 = require("pg");
exports.con = new pg_1.Pool({
    user: 'postgres',
    host: '172.22.48.1',
    password: 'postgres',
    database: 'apiportafolio',
    port: 5432
});
