module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["<rootDir>/src/index.js", "<rootDir>/src/App.jsx"],
  watchPathIgnorePatterns: ["<rootDir>/src/index.js", "<rootDir>/src/App.jsx"],
  collectCoverageFrom: ["!<rootDir>/src/index.js", "!<rootDir>/src/App.jsx"],
}
