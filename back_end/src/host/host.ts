if (process.env.NODE_ENV === undefined) {
  throw new Error("Node Env must be defined");
}
if (process.env.NODE_ENV !== "local" && process.env.NODE_ENV !== "cloud") {
  throw new Error("Node Env must be either 'local' or 'cloud'");
}
const nodeEnv: "local" | "cloud" = process.env.NODE_ENV;

const host = (() => {
  const nodeEnvToHostMap = {
    local: "http://localhost:3001",
    cloud: "http://localhost:8080",
  };

  return nodeEnvToHostMap[nodeEnv];
})();

export = host;
