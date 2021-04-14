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
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      models: [Department, Maintenance, Project],
      autoLoadModels: true,
      synchronize: true,
      database: 'test',
    }),
    SequelizeModule.forFeature([Department, Maintenance, Project]),
  ],
  providers:[DepartmentService, MaintenanceService, ProjectService],
  exports:[DepartmentService, MaintenanceService, ProjectService]
})
export class DbModule {}
