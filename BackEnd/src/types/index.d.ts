export {
}
import {Document} from "mongoose";
import { EducationLevel, OpportunityType, Roles } from "./enum_types"

declare global {
  namespace Express {
    interface Response {
      searchResult: any
    }
    interface Request {
      searchResult: any
      auth_user:IUser
    }
  }

  interface Error{
    statusCode:number
  }
  
  interface IUser extends Document{
    firstName : String,
    lastName: String,
    email : String,
    password : String,
    role: Roles
    image:String
  }

  interface IImage extends Document{
    name: String,
    imageAdress: String,
    cloudinaryId: string,
  }

  interface IOpportunity extends Document{
    provider:String,
    country:String,
    type:OpportunityType,
    educationLevel:Array<EducationLevel>,
    deadLine: Date,
    requirements:[String],
    sourceSite:String,
    open:Boolean,
    duration:String,
    image:String,
    description:String
  }
  interface ISavedOpportunity extends Document{
        userId:string
        opportunities:[string]
  }
}



