import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Department } from './Department';

@Table
export class Maintenance extends Model {
  @Column({
    unique: true,
  })
  title: string;

  @Column(DataType.DATE)
  submission: Date;

  @Column
  description: string;

  @Column
  resolved: boolean;

  @ForeignKey(() => Department)
  @Column
  departmentId: number
}
