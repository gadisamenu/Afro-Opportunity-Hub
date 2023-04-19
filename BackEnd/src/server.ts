import mongoose from "mongoose";
import configs from "./config/configs";
import app from "./app";
import {createAdmin} from "../src/services/user"

mongoose.set('strictQuery', false)
mongoose
  .connect(configs.DB_URI)
  .then(() => {
    console.log("Connected to mongodb...");
    app.listen(configs.PORT, async () =>  {
      await createAdmin()
      return console.log(
        `Express is listening at http://localhost:${configs.PORT}`
      );
    });
  })
  .catch((err: any) => console.log("Error occurred while connecting", err));

