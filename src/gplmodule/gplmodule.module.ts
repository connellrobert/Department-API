import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GraphQLModule, GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { DbModule } from '../dbmodule/dbmodule.module';
import { DepartmentResolver } from './resolvers/Department.resolver';
import { MaintenanceResolver } from './resolvers/Maintenance.resolver';
import { ProjectResolver } from './resolvers/Project.resolver';

@Module({
    imports:[
        GraphQLModule.forRoot({
            include: [],
            autoSchemaFile: true
          }),
          DbModule
    ],
    providers:[DepartmentResolver, MaintenanceResolver, ProjectResolver]
})
export class GplModule {
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
