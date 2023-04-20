import {Schema,model} from "mongoose";
import { Roles } from "../types/enum_types"
import * as bcrypt from "bcrypt";



const UserSchema: Schema<IUser> = new Schema({
        firstName:{
            type:String,
            required:[true,'Please enter FirstName']
        },
        lastName:{
            type:String,
            required:[true,'Please enter lastName']
        },
        email:{
            type: String,
            required: [true, "email is required"],
            lowercase: true,
            trim: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password:{
            type:String,
            required: [true, 'Please enter a password'],
        },
        role: {
            type:String,
            enum:Roles,
            required:[true,'Please enter a role']
        },
        image:{
            type:String,
            ref:"Image"
        }
    },
    {
        timestamps:{
            createdAt:"createdAt",
            updatedAt:"updatedAt"
        }
    }
)

UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next()
});



const User = model<IUser>("User",UserSchema)

export default User;