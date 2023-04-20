import {isValidObjectId} from "mongoose"
import Image from "../models/Image";
import cloudinary from "./cloudinary";


/**
 * 
 * @param body 
 * @returns 
 */
const createImage = async(body)=>{
    const image:IImage = await Image.create(body);
    return image
}


/**
 * 
 * @returns 
 */
const getImages  = async()=>{
    const images:Array<IImage> =  await Image.find();
    return  images;
}


/**
 * 
 * @param id 
 * @returns
 */
const getImage= async(id:string)=>{
    
    if (isValidObjectId(id))
        {
            const image:IImage = await Image.findById(id)
            if (image == null){
                let error =  Error("Image not found");
                error.statusCode = 404;
                throw error;
            }
            return image;
        }
    else{
        let error = Error("Invalid id");
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
const updateImage = async(id,data)=>{
    if (isValidObjectId(id))
    {
        const image:IImage = await Image.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        if (image == null){
            let error =  Error("Image not found");
            error.statusCode = 404;
            throw error;
        }
        return image;
    }
    else{
        let error = Error("Invalid id");
        error.statusCode = 400;
        throw error;
    }
}



/**
 * 
 * @param id 
 */
const deleteImage = async(id:string)=>{
    if (isValidObjectId(id))
    {   
        let image = await Image.findByIdAndDelete(id);
        if (image == null){
            let error =  Error("Image not found");
                error.statusCode = 404;
                throw error;
        }
        await cloudinary.uploader.destroy(image.cloudinaryId)
    }
    else{
        let error = Error("Invalid id");
        error.statusCode = 400;
        throw error;
    }

}

export default{
    deleteImage,
    createImage,
    updateImage,
    getImage,
    getImages
}
