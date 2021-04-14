import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './model/Department';
import { Maintenance } from './model/Maintenance';
import { DepartmentService } from './service/Department.service';
import { MaintenanceService } from './service/Maintenance.service';
import { NestFactory } from '@nestjs/core';
import { DepartmentResolver } from './resolvers/Department.resolver';
import { MaintenanceResolver } from './resolvers/Maintenance.resolver';
import { printSchema } from 'graphql';
import { Project } from './model/Project';
import { ProjectService } from './service/Project.service';
import { ProjectResolver } from './resolvers/Project.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [],
      autoSchemaFile: true
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      models: [Department, Maintenance, Project],
      autoLoadModels: true,
      synchronize: true,
      database: "test",
      
    }),
    SequelizeModule.forFeature([Department, Maintenance, Project])
  ],
  providers: [DepartmentService, MaintenanceService, ProjectService, DepartmentResolver, MaintenanceResolver, ProjectResolver],

})
export class AppModule {

  constructor(){
    this.generateSchema();
  }

  async generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);
    await app.init();
  
    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create([DepartmentResolver, MaintenanceResolver, ProjectResolver]);
    console.log(printSchema(schema));
    console.log("ready to go");
  }
}
