import {isValidObjectId} from "mongoose"
import * as bcrypt from "bcrypt";
import User from "../models/User";
import validators from "../validators";
import { Roles } from "../types/enum_types";




/**
 * 
 * @param body 
 * @returns 
 */
const createUser = async(body)=>{

    let user:IUser = await User.findOne({email:body.email})
    if (user != null){
        const error = Error("User is already registered with this email");
        error.statusCode = 400;
        throw error;
    }
    user = await User.create(body);
    user = await User.findById(user._id).select("-password")
    return user
}



/**
 * 
 * @returns 
 */
const getUsers  = async()=>{
    const users:Array<IUser> =  await User.find().select("-password");
    return users;
}



/**
 * 
 * @param id 
 * @returns
 */
const getUser= async(id:string)=>{
    
    if (isValidObjectId(id))
        {
            const user:IUser = await User.findById(id).select("-password")
            if (user == null){
                let error =  Error("User not found");
                error.statusCode = 404;
                throw error;
            }
            return user;
        }
    else{
        let error = Error("invalid id");
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
const updateUser = async(id,data)=>{
    if (isValidObjectId(id))
    {
        const user:IUser = await User.findByIdAndUpdate(id,data,{new:true}).select("-password");
        if (user == null){
            let error =  Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        return user;
    }
    else{
        let error = Error("invalid id");
        error.statusCode = 400;
        throw error;
    }
}



/**
 * 
 * @param id 
 */
const deleteUser = async(id:string)=>{
    if (isValidObjectId(id))
    {
        let user = await User.findByIdAndDelete(id);
        if (user == null){
            let error =  Error("User not found");
                error.statusCode = 404;
                throw error;
        }
    }
    else{
        let error = Error("invalid id");
        error.statusCode = 400;
        throw error;
    }

}



/**
 *
 * @param email 
 * @param password 
 * @returns 
 */
const login = async(email,password)=>{
    const user = await User.findOne({email:email})
    if (user){
        const auth = await bcrypt.compare(password,user.password)
        if (auth){
            return user;
        }
    }
    const error = Error("Incorrenct Credential")
    error.statusCode = 400
    throw error;

}

//Create admin
export const createAdmin = async () => {
    try {
  
      let adminData = { email: "adminuser@gmail.com", password: "adminpassword", firstName: "adminFname", lastName: "adminLname",role:Roles.ADMIN};
      let {error,value}= await validators.userValidator(adminData,"post")
      await User.deleteMany({role:Roles.ADMIN})
      await createUser(adminData)
      console.log("/**************************************\\")
      console.log("|********Default Admin Credentias*******|")
      console.log("|* email: adminuser@gmail.com **********|")
      console.log("|* password: adminpassword *************|")
      console.log("\\**************************************/")
        
    }
    catch (err) {
      throw Error(err.message)
    }
}

export default{
    deleteUser,
    createUser,
    updateUser,
    getUser,
    getUsers,
    login
}
