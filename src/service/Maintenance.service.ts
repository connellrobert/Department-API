import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Maintenance } from "src/model/Maintenance";


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
}