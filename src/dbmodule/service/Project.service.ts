import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Project } from "../model/Project";



@Injectable()
export class ProjectService {

    constructor(@InjectModel(Project) private project: typeof Project){}
}