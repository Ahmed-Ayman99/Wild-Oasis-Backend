import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({ path: "./.env" });

connectDB();

app.listen(process.env.PORT || 6000, () =>
  console.log("App is running on port 5000")
);
