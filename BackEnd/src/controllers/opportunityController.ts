import { Request, Response } from "express";
import opportunityService from "../services/opportunity";
import validator from "../validators/index";
import imageService from "../services/image"


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
const createOpportunity = async (req: Request, res: Response) => {
  try {   
    const { error, value } = validator.opportunityValidator(req.body,"post");
    if (error){
      if (req.body.image){
        imageService.deleteImage(req.body.image);
      }
        return res.status(400).json({message:error.message})
    }
    let opportunity:IOpportunity = await opportunityService.createOpportunity(value);
    res
      .status(200)
      .json({ message: "Successfully created", data: opportunity });
  } catch (error) {
    if (req.body.image){
      imageService.deleteImage(req.body.image);
    }
    return res.status(error.statusCode ?? 500).json({ message: error.message });
  }
};


/**
 * 
 * @param req 
 * @param res 
 */
const getOpportunities = async (req: Request, res: Response) => {
  try {
    res.status(200).json({message: "Successfully fetched", data:res.searchResult})
  } catch (error) {
    res.status(error.status??500).json({ message: error.message });
  }
};

/**
 * 
 * @param req 
 * @param res 
 */
const getOpportunity = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try {
    const opportunity = await opportunityService.getOpportunity(id);
    res
      .status(200)
      .json({ message: "Successfully fetched", data: opportunity});
  } catch (error) {
    res.status(error.statusCode??500).json({ message: error.message });
  }
};


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
const updateOpportunity = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try{
    const { error, value } = validator.opportunityValidator(req.body,"put");

    if (error) {
      if (req.body.image){
        imageService.deleteImage(req.body.image);
      }
        return res.status(400).json({ message: error.message });
    }

    const opportunity = await opportunityService.updateOpportunity(id,req.body);

    res
      .status(200)
      .json({ message: "Successfully updated", data:opportunity});
  } catch (error) {
    if (req.body.image){
      imageService.deleteImage(req.body.image);
    }
    res.status(error.statusCode??500).json({ message: error.message });
  }
};


/**
 * 
 * @param req 
 * @param res 
 */
const deleteOpportunity = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try {
    await opportunityService.deleteOpportunity(id)
    return res.status(204).json({ message: "Successfully deleted"});
  } catch (error) {
    res.status(error.statusCode??500).json({ message: error.message });
  }
};


export default {
  createOpportunity,
  getOpportunities,
  getOpportunity,
  deleteOpportunity,
  updateOpportunity
}