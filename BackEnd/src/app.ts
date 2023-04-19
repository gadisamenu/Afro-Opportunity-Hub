import express, {
  Application,
  Request,
  Response,
  NextFunction
} from 'express'

import routes from "./routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Application = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth",routes.authRouter)
app.use("/api/v1/users",routes.userRouter)


app.get("/", (req, res) => {
  return res.send("Afro Opportunity Hub!");
});


export default app;
