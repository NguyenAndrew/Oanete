import path from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
import { NextFunction, Request, Response } from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const helmet = require("helmet");
import getConfig from "./config/config";
import ConfigTemplate from "./config/configTemplate";

const config: ConfigTemplate = getConfig();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const OpenApiValidator = require("express-openapi-validator");

const app = express();

const port = config.port;

app.use(helmet());

app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(
      __dirname,
      "../../..",
      "api_documentation/reference",
      "api.yaml"
    ),
    validateResponses: {
      removeAdditional: "failing",
    }
  })
);

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("Healthy!");
});

app.post("/axios-test", (req: Request, res: Response) => {
  console.log("You have succesfully made an axios call!");
  res.status(200).send("axios-test completed succesfully!");
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

export { app, port };
