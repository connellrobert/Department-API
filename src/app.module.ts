import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './model/Department';
import { Maintenance } from './model/Maintenance';
@Module({
  imports: [
    GraphQLModule.forRoot({
      include: [],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'password',
      models: [Department, Maintenance],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
