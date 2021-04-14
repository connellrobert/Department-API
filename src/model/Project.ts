import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Department } from "./Department";


@Table
export class Project extends Model {

    @Column(DataType.STRING)
    url:string;

    @ForeignKey(()=>Department)
    @Column
    departmentId: number;
}