import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config({
  path: path.join(__dirname, "../config.env"),
});

const init = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/twitter");
    app.listen(process.env.PORT, () => {
      console.log(`Listening to Port ${process.env.PORT} and connected to DB.`);
    });
  } catch (err) {}
};

init();
