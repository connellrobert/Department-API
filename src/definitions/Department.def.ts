import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Maintenance } from './Maintenance.def';

@ObjectType({
  description:
    'A department inside the company to track the inner workings of the company',
})
export class Department {
  @Field({ nullable: false, description: 'The name of the department' })
  name: string;
  @Field({
    defaultValue: [],
    description:
      "A list of project url's for gathering information about the projects by the department",
  })
  projects: string[];

  @Field({
    defaultValue: [],
    description: 'A list of maintenance requests by this department',
  })
  maintenanceRequests: Maintenance[];
}
