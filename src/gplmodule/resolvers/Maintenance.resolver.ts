import { Query, Resolver } from "@nestjs/graphql";
import { Maintenance } from "../definitions/Maintenance.def";
import { MaintenanceService } from "../../dbmodule/service/Maintenance.service";

@Resolver(of => Maintenance)
export class MaintenanceResolver {
    constructor(private mainService: MaintenanceService){}

    @Query((returns) => Maintenance)
    findAll(page:number, offset: number):Promise<Maintenance[]>{
        return this.mainService.findAll(page, offset);
    }
}