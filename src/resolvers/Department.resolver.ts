import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Department } from 'src/definitions/Department.def';
import { Maintenance } from 'src/definitions/Maintenance.def';

@Resolver((of) => Department)
export class DepartmentResolver {
  constructor() {}
  @Query((returns) => Department)
  async department(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Department> {
    return null;
  }

  @ResolveField()
  async maintenance(@Parent() department: Department): Promise<Maintenance[]> {
    return null;
  }
}
