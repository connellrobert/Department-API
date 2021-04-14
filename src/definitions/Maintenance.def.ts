import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'The structure for maintenance requests for the departments',
})
export class Maintenance {
  @Field({
    nullable: false,
    description: 'A unique title to help identify association with Departments',
  })
  title: string;

  @Field({ description: 'The date the maintenance request was submitted' })
  submission: Date;

  @Field({
    nullable: false,
    description: 'The description of the maintenance request',
  })
  description: string;

  @Field({
    nullable: false,
    defaultValue: false,
    description:
      'Whether the maintenance request has been resolved or has been completed',
  })
  resolved: boolean;
}
