import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import requirements from "./routes/requirements";
import { connectDatabase } from "./config/database";
import projects from "./routes/projects";
import cors from "cors";
import error from "./middlewares/errors";

const app = express();

//Setup configuration
dotenv.config({ path: "./src/config/config.env" });
const port = process.env.PORT;
const mode = process.env.NODE_ENV;

//Connecting to database
connectDatabase();

//Add routes
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", requirements);
app.use("/api/v1", projects);
app.use(error);

//Listen to server
app.listen(port, () => {
  console.log(`Server started on port ${port} in ${mode} environment`);
});
