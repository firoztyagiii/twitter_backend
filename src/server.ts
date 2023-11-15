import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config({
  path: path.join(__dirname, "../config.env"),
});

const init = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@twittercluster.ld8piwe.mongodb.net/`
    );
    app.listen(process.env.PORT, () => {
      console.log(`Listening to Port ${process.env.PORT} and connected to DB.`);
    });
  } catch (err) {}
};

init();
