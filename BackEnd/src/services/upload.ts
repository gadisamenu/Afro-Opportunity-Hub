import DataURIParser from "datauri/parser";
import { Request, Response, NextFunction } from "express";
import cloudinary from '../services/cloudinary';
import imageService from "../services/image"

const parser = new DataURIParser()

export const upload = async(req: Request, res: Response, next: NextFunction, file:any, isValidFormat:any) => {
    const fileFormat = file.mimetype.split('/')[1] 
    const { base64 } = parser.format(fileFormat,file.data);

    if (!isValidFormat(fileFormat)) {
      throw new Error(`Invalid image format sent!`)
    }

    const result =  await cloudinary.uploader.upload(`data:image/${fileFormat};base64,${base64}`)

    const data = {
        name: result.fieldname || 'image.name',
        imageAdress: `${result.secure_url}`,
        cloudinaryId: `${result.public_id}`
    };

    const image:IImage = await imageService.createImage(data)

    return image._id.toString()
}