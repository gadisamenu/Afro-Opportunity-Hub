import {isValidObjectId} from "mongoose"
import SavedOpportunity from "../models/SavedOpportunity";


/**
 * 
 * @param body 
 * @returns 
 */
const addToSavedOpportunity = async(userId,oppId)=>{
    let savedOpportunity = await SavedOpportunity.findOne({userId:userId})

    if (!savedOpportunity){
        savedOpportunity = await SavedOpportunity.create({userId:userId})
    }
    await savedOpportunity.updateOne({$addToSet:{opportunities:oppId}})
    await savedOpportunity.save()
    return
}

/**
 * 
 * @param id 
 * @returns
 */
const getSavedOpportunity= async(userId:string)=>{
    
    if (isValidObjectId(userId))
        {
            const savedOpportunity:ISavedOpportunity = await SavedOpportunity.findOne({userId:userId})
            
            if (savedOpportunity == null){
                return await SavedOpportunity.create({userId:userId})
            }
            await savedOpportunity.populate("opportunities")
            return savedOpportunity;
        }
    else{
        let error = Error("Invalid user id");
        error.statusCode = 400;
        throw error;
    }
}


/**
 * 
 * @param id 
 */
const popFromSavedOpportunity = async(userId,oppId)=>{
    if (isValidObjectId(userId))
    {   
        await SavedOpportunity.updateOne(
            {userId:userId},
            {$pull:{opportunities:oppId}}
        );
    }
    else{
        let error = Error("Invalid user id");
        error.statusCode = 400;
        throw error;
    }

}

export default{
    addToSavedOpportunity,
    getSavedOpportunity,
    popFromSavedOpportunity
}
