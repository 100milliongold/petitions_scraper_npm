module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    moduleDirectories: ["node_modules", '.'],
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    moduleNameMapper: {
      "@exmpl/(.*)": "<rootDir>/$1"
    },
  };