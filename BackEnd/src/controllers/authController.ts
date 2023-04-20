import { Request, Response } from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import configs from '../config/configs'
import userService from '../services/user';
import imageService from "../services/image"

const jwtSecret = configs.JWT_SECRET;


// create json web token 30 -means 30 days
const maxAge = 30 * 24 * 60 * 60;
export const createToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: maxAge
  });
};

const userSignup =async (req:Request,res: Response) => {
  try{
    const user = await userService.createUser(req.body)
    res.status(200).json({message:"User registered successfully", data:user})
  }
  catch(error){
    if (req.body.image){
      imageService.deleteImage(req.body.image);
    }
    res.status(error.statusCode).json({message:error.message})
  }
  
}

const userLogin = async (req: Request, res: Response) => {

    try {
      const { email, password } = req.body;

      const user: IUser = await userService.login(email, password);
      
      const token = createToken(user);
      
      await user.populate("image","-created_at -updated_at -__v")

      res.header('token', token);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      return res.status(200).json({
        token: token,
        message: 'User logged in successfully',
        data: user
      });
    }
    catch (err) {
      if (err.isJoi === true) {
        return res.status(400).json({ error: err.details[0].message });
      }
      return res.status(400).json({ error: "Wrong User credentials." }).end();
    }
}


const changePassword = async (req: Request, res: Response) => {
  const { oldPassword, newPassword, confirmPassword } = req.body
  try {
    if (!oldPassword || !newPassword || !confirmPassword || oldPassword == "" || newPassword == "" || confirmPassword == "") {
      return res.status(400).json({ message: "Empty fields are not allowed" })
    }
    //check user
    if (!req.auth_user) {
      return res.status(400).json({ message: "User not Authenticated" });
    }
    //Check password with confirm password
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Wrong password confirmation!" });
    }
    //Check if password length 
    if(newPassword.length < 6){
      return res.status(400).json({ message : "Password length should be greater than 6!" });
    }
    //Compare oldPassword.
    const isValid = await bcrypt.compare(oldPassword, req.auth_user.password);
    if (!isValid) {
      return res.status(400).json({ message: "Wrong Old password!" });
    }
    //If everything checks out save the updates
    //Hash the new Password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const changedUser = await userService.updateUser(req.auth_user._id,{password:hashedPassword})
  
    return res.status(200).json({
      message: 'Password changed successfully!'
    })

  } catch (error) {
    return res.status(400).json({ message: "Error while changing password \n Error: "  +  error.message });
  }
};


//CurrentUser
const currentUser = (req: Request, res:Response) => {
  let token = req.headers['authorization'] || req.body.token || req.headers.cookie?.split('=')[1] || req.cookies?.jwt;

  if (token) {
    const bearer = token.split(' ');
    if(bearer.length == 2){
      token = bearer[1];
    }else{
      token = bearer[0];
    }
    jwt.verify(token, jwtSecret, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({ error: {msg: "User not authenticated. The token sent is bad or expired."}}).end();
      } else {
        let user:IUser = await userService.getUser(decodedToken.id._id);
        if(!user){
          return res.status(400).json({ message: "User not authenticated or token sent is bad or expired."}).end();
        }

        return res.status(200).json({
            data: user
          });

      }
    });
  } else {
      return res.status(400).json({ message: "User not authenticated!"}).end();
  }
};


const logoutUser = async (req, res) => {
  try {
    return res.cookie('jwt', '', { maxAge: 1 }).header('token', "").status(201).json({
      status: "Logged out",
      message: "User logged out successfully!"
    }).end();
  } catch (error) {
    return res.status(400).json({ error: "Error while logging out!" }).end();
  }
}

const authController = { userLogin, logoutUser, changePassword,currentUser,userSignup}
export default authController