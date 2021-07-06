describe("host", () => {
  const defaultEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...defaultEnv };
  });

  test("Running locally", async () => {
    process.env.NODE_ENV = "local";
    await import("../../src/host/host");
  });

  test("Running on cloud", async () => {
    process.env.NODE_ENV = "cloud";
    await import("../../src/host/host");
  });

  test("Running with undefined node_env, errors out", async () => {
    delete process.env.NODE_ENV;
    await expect(import("../../src/host/host")).rejects.toThrow(
      "Node Env must be defined"
    );
  });

  test("Running with invalid node_env, errors out", async () => {
    process.env.NODE_ENV = "invalid";
    await expect(import("../../src/host/host")).rejects.toThrow(
      `Node Env must be either 'local' or 'cloud'`
    );
  });
});
