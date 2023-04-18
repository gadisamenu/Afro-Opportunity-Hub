export {}
import {Document, Schema} from "mongoose";

declare global {
  namespace Express {
    interface Response {
      searchResult: any
    }
    interface Request {
      searchResult: any
    }
  }
  
  interface IUser extends Document{
    firstName : String,
    lastName: String,
    email : String,
    password : String,
    avatar: String,
    role: Roles
    opportunity_list: Array<Schema.Types.ObjectId>
  }

  interface IOpportunity extends Document{
    provider:String,
    country:String,
    type:OpportunityType,
    educationLevel:Array<EducationLevel>,
    deadLine: Date,
    requirements:Array<String>,
    sourceSite:String,
    open:Boolean,
    duration:String
        
  }
  enum EducationLevel{
    GRADUATE="GRADUATE",
    UNDERGRADUATE="UNDERGRADUATE",
    POSTGRADUATE="POSTGRADUATE"
  }
  enum Roles{
    ADMIN ="ADMIN",
    CLIENT="CLIENT"
  }
  enum OpportunityType{
    INTERNSHIP="INTERNSHIP",
    SCHOLARSHIP="SCHOLARSHIP"
  }

}

