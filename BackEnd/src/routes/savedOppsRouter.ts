import { Router } from "express";
import savedOppController from "../controllers/savedOpportunityController";
import multipleUpload from "../middlewares/multipleUpload";
import isAuthenticated from "../middlewares/authenticate";

const savedOppsRouter = Router();
savedOppsRouter.get("/",isAuthenticated,savedOppController.getSavedOpportunity)
savedOppsRouter.post("/",isAuthenticated,savedOppController.addToSavedOpp)
savedOppsRouter.delete("/",isAuthenticated,savedOppController.popFromSavedOpp)

export default savedOppsRouter