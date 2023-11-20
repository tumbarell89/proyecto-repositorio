"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Apisuser = class Apisuser extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "idusuario"
    }),
    __metadata("design:type", Number)
], Apisuser.prototype, "idusuario", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "userapi"
    }),
    __metadata("design:type", String)
], Apisuser.prototype, "userapi", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "contrasenna"
    }),
    __metadata("design:type", String)
], Apisuser.prototype, "contrasenna", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "jwebtoken"
    }),
    __metadata("design:type", String)
], Apisuser.prototype, "jwebtoken", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: "fechaactualizacion"
    }),
    __metadata("design:type", Date)
], Apisuser.prototype, "fechaactualizacion", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: "fechavencimiento"
    }),
    __metadata("design:type", Date)
], Apisuser.prototype, "fechavencimiento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        field: "activo"
    }),
    __metadata("design:type", Boolean)
], Apisuser.prototype, "activo", void 0);
Apisuser = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "userapi",
    })
], Apisuser);
exports.default = Apisuser;
