import configMap from "./configMap";
import ConfigTemplate from "./configTemplate";

const getConfig = (): ConfigTemplate => {
  const processEnvPropertyName: string = configMap._var;

  if (process.env[processEnvPropertyName] === undefined) {
    throw new Error(`process.env.${processEnvPropertyName} must be defined`);
  }

  const processEnvPropertyValue: string = process.env[
    processEnvPropertyName
  ] as string;

  if (
    !Object.prototype.hasOwnProperty.call(configMap, processEnvPropertyValue)
  ) {
    throw new Error(
      `${processEnvPropertyValue} must exist within configMap.ts`
    );
  }

  const validProcessEnvPropertyValue: keyof typeof configMap =
    processEnvPropertyValue as keyof typeof configMap;

  const importName: string = configMap[validProcessEnvPropertyValue];

  // Require (CommonJS) instead of dynamic import (ES6) used to avoid having to support top-level await. Latest LTS version of node was returning errors on features that came when compiling TypeScript with newer ECMAScript.
  // Default used due to using CommonJS syntax along with ES6 syntax.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config: ConfigTemplate = require(importName).default;

  return config;
};

export default getConfig;
