import axios from "axios";
import express, { Request, Response } from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const helmet = require("helmet");
import host from "./host/host";
import getConfig from "./config/config";
import ConfigTemplate from "./config/configTemplate";

const config: ConfigTemplate = getConfig();

const app = express();
const port = config.port;

app.use(helmet());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Healthy!");
  axios.post(`${host}/axios-test`);
});

app.post("/axios-test", (req: Request, res: Response) => {
  console.log("You have succesfully made an axios call!");
  res.status(200).send("axios-test completed succesfully!");
});

export { app, port };
