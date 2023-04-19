import {Request,Response,NextFunction } from "express"
import { Roles } from "../types/enum_types"

const isAuthorized=(authorizedRole:string=Roles.ADMIN)=>(req:Request,res:Response,next:NextFunction)=>{
    try{
        let user = req.auth_user
        if (user.role === authorizedRole){
            next()
            return
        }
        else{
            return res.status(403).json({message:"user not authorized"})
        }
    }
    catch(error){
        return res.status(403).json({message:"user not authorized"})
    }
   
}
export default isAuthorized;