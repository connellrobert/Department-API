import { Resolver } from "@nestjs/graphql";
import { Project } from "../definitions/Project.def";
import { ProjectService } from "../../dbmodule/service/Project.service";

@Resolver(of => Project)
export class ProjectResolver {

    constructor(private projService: ProjectService){}


}