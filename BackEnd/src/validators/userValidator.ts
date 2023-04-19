import Joi from "joi";
import { Roles } from "../types/enum_types";
const customeRule = {post:(schema)=> schema.required(),put:(schema=> schema.optional())}

export const userValidator = (userData,requestType:string) => {
    const schema = Joi.object({
      _id:Joi.forbidden(),
      firstName : Joi.string().alphanum().min(5).max(50).alter(customeRule),
      lastName : Joi.string().alphanum().min(5).max(50).alter(customeRule),
      email:Joi.string().email().min(5).max(256).alter(customeRule),
      password : Joi.string().min(6).max(100).alter({post:(schema)=> schema.required(),put:(schema=>schema.forbidden())}),
      role : Joi.string().valid(...Object.values(Roles)).alter({post:(schema)=> schema.required(),put:(schema=>schema.forbidden())}),
      image:Joi.string().max(50)
    });
    return schema.tailor(requestType).validate(userData, { abortEarly: false });
  };
