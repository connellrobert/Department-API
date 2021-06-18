import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './model/Department';
import { Maintenance } from './model/Maintenance';
import { Project } from './model/Project';
import { DepartmentService } from './service/Department.service';
import { MaintenanceService } from './service/Maintenance.service';
import { ProjectService } from './service/Project.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DATASOURCE_HOST,
      port: Number(process.env.DATASOURCE_PORT),
      username: process.env.DATASOURCE_USERNAME,
      password: process.env.DATASOURCE_PASSWORD,
      models: [Department, Maintenance, Project],
      autoLoadModels: true,
      synchronize: true,
      database: process.env.DATASOURCE_DATABASE,
    }),
    SequelizeModule.forFeature([Department, Maintenance, Project]),
  ],
  providers:[DepartmentService, MaintenanceService, ProjectService],
  exports:[DepartmentService, MaintenanceService, ProjectService]
})
export class DbModule {}
