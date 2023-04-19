import { Request, Response } from "express";
import userService from "../services/user";
import validator from "../validators/index";


/**
 * 
 * @param req 
 * @param res 
 * @returns 
 */
export const createUser = async (req: Request, res: Response) => {
  try {   
    // console.log(req.body)
    const { error, value } = validator.userValidator(req.body,"post");
    if (error){
        return res.status(400).json({message:error.message})
    }
    let user:IUser = await userService.createUser(value);
    res
      .status(200)
      .json({ message: "Successfully created", data: user });
  } catch (error) {
    return res.status(error.statusCode ?? 500).json({ message: error.message });
  }
};


/**
 * 
 * @param req 
 * @param res 
 */
export const getUsers = async (req: Request, res: Response) => {
  try {
    let users:Array<IUser>  = await userService.getUsers();
    res.status(200).json({message: "Successfully fetched", data:users})
  } catch (error) {
    res.status(error.status??500).json({ message: error.message });
  }
};

/**
 * 
 * @param req 
 * @param res 
 */
export const getUser = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try {
    const user = await userService.getUser(id);
    res
      .status(200)
      .json({ message: "Successfully fetched", data: user});
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
export const updateUser = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try{
    const { error, value } = validator.userValidator(req.body,"put");

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    const user = await userService.updateUser(id,req.body);

    res
      .status(200)
      .json({ message: "Successfully updated", data:user});
  } catch (error) {
    res.status(error.statusCode??500).json({ message: error.message });
  }
};


/**
 * 
 * @param req 
 * @param res 
 */
export const deleteUser = async (req: Request, res: Response) => {
  let { id = null } = req.params;
  try {
    await userService.deleteUser(id)
    return res.status(204).json({ message: "Successfully deleted"});
  } catch (error) {
    res.status(error.statusCode??500).json({ message: error.message });
  }
};
