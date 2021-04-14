import {
  Args,

  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { Department } from '../definitions/Department.def';
import { Maintenance } from '../definitions/Maintenance.def';
import { Project } from '../definitions/Project.def';
import { DepartmentService } from '../service/Department.service';
import { MaintenanceService } from '../service/Maintenance.service';
@Resolver((of) => Department)
export class DepartmentResolver {
  constructor(
    private depService: DepartmentService,
    private mainService: MaintenanceService,
  ) {}

  @Query((returns) => Department)
  async department(
    @Args('name', { type: () => String }) name: string,
  ): Promise<Department> {
    return this.depService.findByName(name);
  }

  @ResolveField(()=>[Maintenance])
  async maintenance(@Parent() department: Department): Promise<Maintenance[]> {
    const mainArr: Maintenance[] = [];
    new Promise<Maintenance>((resolve, reject) =>
      department.maintenanceRequests
        .map((m) => this.mainService.findByTitle(m.title))
        .map((p) => p.then((m) => m.forEach(resolve))),
    ).then((m) => mainArr.push(m));
    return new Promise<Maintenance[]>((resolve, reject) => resolve(mainArr));
  }

  @ResolveField(()=>[Project])
  async projects(@Parent() department: Department): Promise<Project[]>{
    return null;
  }
}
