import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType({
    description:"A url detailing the projects a department is engaging in."
})
export class Project {

    @Field(()=>String,{defaultValue:"", description:"A list of url endpoints for the departments projects"})
    url: string;
}