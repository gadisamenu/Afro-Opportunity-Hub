import mongoose, {Schema} from "mongoose";

const ImageSchema: Schema<IImage> = new mongoose.Schema({
    name: {
        type: String,
    },
    imageAdress: {
        type: String
    },
    cloudinaryId: {
        type: String
    }
},
{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
})


const Image = mongoose.model<IImage>('Image',ImageSchema)
export default Image