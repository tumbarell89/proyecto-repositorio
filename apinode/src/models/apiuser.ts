import {Model,Table, Column, DataType  } from "sequelize-typescript";

@Table({
    tableName: "userapi",
})

export default class Apisuser extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "idusuario"
      })
      idusuario?: number;
    
      @Column({
        type: DataType.STRING(255),
        field: "userapi"
      })
      userapi?: string;
    
      @Column({
        type: DataType.STRING(255),
        field: "contrasenna"
      })
      contrasenna?: string;
    
      @Column({
        type: DataType.STRING(255),
        field: "jwebtoken"
      })
      jwebtoken?: string;

      @Column({
        type: DataType.DATE,
        field: "fechaactualizacion"
      })
      fechaactualizacion?: Date;

      @Column({
        type: DataType.DATE,
        field: "fechavencimiento"
      })
      fechavencimiento?: Date;

      @Column({
        type: DataType.BOOLEAN,
        field: "activo"
      })
      activo?: boolean;
}