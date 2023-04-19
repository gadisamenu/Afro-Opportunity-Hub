import { Router } from "express";
import oppController from "../controllers/opportunityController";
import isAuthenticated from "../middlewares/authenticate";
import isAuthorized from "../middlewares/authorization";
import searchAndFilter from "../middlewares/searchAndFilter";

const oppRouter = Router();
oppRouter.get("/",searchAndFilter,oppController.getOpportunities)
oppRouter.get("/:id",oppController.getOpportunity)
oppRouter.post("/",isAuthenticated,isAuthorized(), oppController.createOpportunity)
oppRouter.put("/:id",isAuthenticated,isAuthorized(),oppController.updateOpportunity)
oppRouter.delete("/:id",isAuthenticated, isAuthorized(),oppController.deleteOpportunity)

export default oppRouter