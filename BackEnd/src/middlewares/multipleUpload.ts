import { NextFunction, Request, Response } from 'express'
import DataURIParser from 'datauri/parser';
import { upload } from '../services/upload';

const imageFormats = [".jpg", ".jpeg", ".png", "jpg", "jpeg", "png", "octet-stream"]
interface FileRequest extends Request{
  files: any;
}
const isValidFormat = (fileFormat) => {
  let isValidFile = false
  for(let i=0; i < imageFormats.length; i++){
    if(fileFormat === imageFormats[i]){
      isValidFile = true
      break
    }
  }
  return isValidFile
}


export default async function multipleUpload (req:FileRequest, res:Response, next:NextFunction) {
    try {
      let pictureFiles = req.files;
      if (!req.files){
        return next()
      }   

      if (pictureFiles.image && !pictureFiles.image.length){
          const image = await upload(req,res,next,pictureFiles.image,isValidFormat)
          req.body.image =image;
      }  
      next()
      return
    } catch (err) {
      res.status(400).json({message:err.message})
      return
    }
  }

