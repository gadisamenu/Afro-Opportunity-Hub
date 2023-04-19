import {isValidObjectId} from "mongoose"
import Opportunity from "../models/Opportunity";





/**
 * 
 * @param body 
 * @returns 
 */
const createOpportunity = async(body)=>{
    const opportunity:IOpportunity = await Opportunity.create(body);
    return opportunity
}

/**
 * 
 * @returns 
 */
const getOpportunities  = async()=>{
    const opportunitys:Array<IOpportunity> =  await Opportunity.find();
    return opportunitys;
}



/**
 * 
 * @param id 
 * @returns
 */
const getOpportunity= async(id:string)=>{
    
    if (isValidObjectId(id))
        {
            const opportunity:IOpportunity = await Opportunity.findById(id)
            if (opportunity == null){
                let error =  Error("Opportunity not found");
                error.statusCode = 404;
                throw error;
            }
            return opportunity;
        }
    else{
        let error = Error("Invalid id");
        error.statusCode = 400;
        throw error;
    }
}

/**
 * 
 * @param id 
 * @param data 
 * @returns 
 */
const updateOpportunity = async(id,data)=>{
    if (isValidObjectId(id))
    {
        const opportunity:IOpportunity = await Opportunity.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        if (opportunity == null){
            let error =  Error("Opportunity not found");
            error.statusCode = 404;
            throw error;
        }
        return opportunity;
    }
    else{
        let error = Error("Invalid id");
        error.statusCode = 400;
        throw error;
    }
}



/**
 * 
 * @param id 
 */
const deleteOpportunity = async(id:string)=>{
    if (isValidObjectId(id))
    {
        let opportunity = await Opportunity.findByIdAndDelete(id);
        if (opportunity == null){
            let error =  Error("Opportunity not found");
                error.statusCode = 404;
                throw error;
        }
    }
    else{
        let error = Error("Invalid id");
        error.statusCode = 400;
        throw error;
    }

}

export default{
    deleteOpportunity,
    createOpportunity,
    updateOpportunity,
    getOpportunity,
    getOpportunities
}
