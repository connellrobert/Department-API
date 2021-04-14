import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Maintenance extends Model {
  @Column
  submission: Date;

  @Column
  description: string;

  @Column
  resolved: boolean;
}
