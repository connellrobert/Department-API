import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Col } from 'sequelize/types/lib/utils';
import { Maintenance } from './Maintenance';

@Table({})
export class Department extends Model {
  @Column({
    unique: true,
    allowNull: false,
  })
  name: string;
  @Column
  projects: string[];

  @HasMany(() => Maintenance)
  maintenance: Maintenance[];
}
