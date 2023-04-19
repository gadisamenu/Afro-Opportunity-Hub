export {
}
import {Document, Schema} from "mongoose";
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
    avatar: String,
    role: Roles
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
    duration:String
        
  }
}



