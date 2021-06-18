import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from '../model/Department';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel(Department) private department: typeof Department) {}

  createDepartment(department: Department): Promise<Department> {
    return this.department.create(department);
  }

  findByName(name: string): Promise<Department> {
    return this.department.findOne({
      where: {
        comparator: {
          attribute: 'name',
          logic: '==',
          val: name,
        }
      },
    });
  }
  findAll(num: number): Promise<Department[]> {
    return this.department.findAll({
      limit: 25,
      offset: num,
    });
  }

  
}
