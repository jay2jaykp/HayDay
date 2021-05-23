import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { hayday } from "./api/routes";

dotenv.config();
const app = express();
const port = process.env.PORT;

// body parser middleware
app.use(express.json());

// logger middleware
app.use(morgan("tiny"));

if (process.env.NODE_ENV === "development") {
  console.log("This is a dev environment");
  app.use(cors());
}

app.use("/hayday", hayday);

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
