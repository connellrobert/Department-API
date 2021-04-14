import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Maintenance } from './Maintenance';
import { Project } from './Project';

@Table({})
export class Department extends Model {
  @Column({
    unique: true,
    allowNull: false,
  })
  name: string;

  @HasMany(()=> Project, {foreignKey: 'departmentId',keyType: DataType.INTEGER})
  projects: Project[];

  @HasMany(() => Maintenance, { foreignKey: 'department' })
  maintenanceRequests: Maintenance[];
}
