module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/build/", 
    "<rootDir>/node_modules/"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};