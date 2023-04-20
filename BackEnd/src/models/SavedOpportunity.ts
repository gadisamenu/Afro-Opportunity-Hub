import {Schema,model} from "mongoose";

const SavedOpportunitySchema: Schema<ISavedOpportunity> = new Schema({
        userId:{
            type:String,
            required:[true,"userId is required"],
            ref:"User"
        },
        opportunities:{
            type:[String],
            default:[],
            ref:"Opportunity"
        }
    },
    {
        timestamps:{
            createdAt:"createdAt",
            updatedAt:"updatedAt"
        }
    }
)




const SavedOpportunity = model<ISavedOpportunity>("SavedOpportunity",SavedOpportunitySchema)

export default SavedOpportunity;