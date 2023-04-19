import Joi from "joi";
import { Roles } from "../types/enum_types";
const customeRule = {post:(schema)=> schema.required(),put:(schema=> schema.optional())}

export const userValidator = (userData,requestType:string) => {
    const schema = Joi.object({
      _id:Joi.forbidden(),
      firstName : Joi.string().alphanum().alter(customeRule),
      lastName : Joi.string().alphanum().alter(customeRule),
      email:Joi.string().email().alter(customeRule),
      password : Joi.string().alter({post:(schema)=> schema.required(),put:(schema=>schema.forbidden())}),
      avatar: Joi.string(),
      role : Joi.string().valid(...Object.values(Roles)).alter({post:(schema)=> schema.required(),put:(schema=>schema.forbidden())})
    });
    return schema.tailor(requestType).validate(userData, { abortEarly: false });
  };
