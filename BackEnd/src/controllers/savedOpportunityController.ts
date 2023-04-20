import { Request, Response } from "express";
import {isValidObjectId} from "mongoose"
import savedOpportunityService from "../services/savedOpportunity"
import opportunityServices from "../services/opportunity"



/**
 * 
 * @param req 
 * @param res
 * @returns 
 */
const addToSavedOpp = async (req: Request, res: Response) => {
    try {
        let {opportunityId = null} = req.body
        const opportunity =await opportunityServices.getOpportunity(opportunityId)
        if (!opportunity){
            return res.status(404)
            .json({message:"Opportunity not found"})
        }
        savedOpportunityService.addToSavedOpportunity(req.auth_user._id,opportunityId)
        res.status(200)
        .json({ message: "Added successfully"});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

/**
 * 
 * @param req 
 * @param res
 * @returns 
 */
const getSavedOpportunity = async (req: Request, res: Response) => {
    try {
        const savedOpportunities = await savedOpportunityService.getSavedOpportunity(req.auth_user._id)
        res.status(200)
        .json({ message: "Fetch successfully",data:savedOpportunities});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}


/**
 * 
 * @param req 
 * @param res
 * @returns 
 */
const popFromSavedOpp = async (req: Request, res: Response) => {
    try {
        let {opportunityId = null} = req.body
        const opportunity = await opportunityServices.getOpportunity(opportunityId)
        if (!opportunity){
            return res.status(404)
            .json({message:"Opportunity not found"})
        }
        savedOpportunityService.popFromSavedOpportunity(req.auth_user._id,opportunityId)
        res.status(200)
        .json({ message: "Removed successfully"});
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

const savedOppController = {
    addToSavedOpp,
    getSavedOpportunity,
    popFromSavedOpp
}
export default savedOppController
