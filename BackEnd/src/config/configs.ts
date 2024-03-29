import dotenv from 'dotenv';
dotenv.config();

const  DB_URI = process.env.MONGODB_LOCAL 
const PORT = process.env.PORT || 3000
const EMAIL = process.env.EMAIL 
const PASSWORD = process.env.PASSWORD 
const JWT_SECRET = process.env.JWT_SECRET 

const configs = {
  DB_URI,
  PORT,
  EMAIL,
  PASSWORD,
  JWT_SECRET
}

export default configs

