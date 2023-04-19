import {Schema,model} from "mongoose";
import { OpportunityType,EducationLevel } from "../types/enum_types";

const OpportunitySchema: Schema<IOpportunity> = new Schema({
        provider:{
            type:String,
            required:[true,"coutry is required"]
        },
        country:{
            type:String,
            required:[true,"country is required"],
            trim:true,
            lowercase:true,
        },
        type:{
           type:String,
           enum:OpportunityType

        },
        educationLevel:{
            type:[String],
            enum:EducationLevel
        },
        deadLine: {
            type:Date,
            required:[true,"deadLine is required"]
        },
        requirements:{ 
            type: [String],
            default:[]
        },
        sourceSite:{
            type:String
        },
        open:{
            type:Boolean,
            default:true
        },
        duration:{
            type:String
        },
    },
    {
        timestamps:{
            createdAt:"createdAt",
            updatedAt:"updatedAt"
        }
    }
)




const Opportunity = model<IOpportunity>("Opportunity",OpportunitySchema)

export default Opportunity;