import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Maintenance } from "../model/Maintenance";


@Injectable()
export class MaintenanceService {

    constructor(@InjectModel(Maintenance)private maintenance: typeof Maintenance) {
        
    }

    createRequest(maintenance: Maintenance):Promise<Maintenance> {
        return this.maintenance.create(maintenance);
    }

    findBySubmissionDate(date: Date): Promise<Maintenance[]>{
        return this.maintenance.findAll();
    }

    findByTitle(title:string):Promise<Maintenance[]>{
        return this.maintenance.findAll({
            where:{
                attribute:"title",
                logic: "==",
                val: title
            }
        })
    }

    findAll(page:number, offset:number){
        return this.maintenance.findAll({
            limit: page,
            offset
        })
    }


}