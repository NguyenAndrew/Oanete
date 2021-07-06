const configMap = {
  _var: "NODE_ENV", // Used to obtain property name located at process.env. Example: _var: NODE_ENV means the value will be extracted from process.env._var
  local: "./local", // The value of process.env._var determines which environment file to load. If _var: NODE_ENV and process.env.NODE_ENV = local, then load in the ./local.ts file
  cloud: "./development",
  development: "./development"
};

export default configMap;
