import {Schema,model} from "mongoose";

const OpportunitySchema: Schema<IOpportunity> = new Schema({
        provider:String,
        country:{
            type:String,
            required:[true,"country is required"],
            trim:true,
            lowercase:true,
        },
        type:{
           type:String,
           enum: OpportunityType
        },
        educationLevel:{
            type:[],
            enum:EducationLevel
        },
        deadLine: {
            type:Date,
            required:[true,"deadLine is required"]
        },
        requirements:{ 
            type: [],
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