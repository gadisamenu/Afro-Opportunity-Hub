import Joi,{DateSchema} from "joi";
import { EducationLevel, OpportunityType, Roles } from "../types/enum_types";
const customeRule = {post:(schema)=> schema.required(),put:(schema=> schema.optional())}

export const opportunityValidator = (opportunityData,requestType:string) => {
    const schema = Joi.object({
      _id:Joi.forbidden(),
      provider:Joi.string().min(5).max(256).alter(customeRule),
      country : Joi.string().pattern(/^[a-zA-Z]+$/).alter(customeRule).max(50),
      deadLine:Joi.date().alter(customeRule),
      description:Joi.string().max(500),
      open:Joi.boolean(),
      duration:Joi.string().alter(customeRule).max(256),
      type : Joi.string().valid(...Object.values(OpportunityType)).alter(customeRule),
      educationLevel : Joi.array().items(Joi.string().valid(...Object.values(EducationLevel))).alter(customeRule),
      requirements:Joi.array().items(Joi.string().max(200).min(5)),
      image:Joi.string().max(50)
    });
    return schema.tailor(requestType).validate(opportunityData, { abortEarly: false });
  };
