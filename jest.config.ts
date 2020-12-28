// jest.config.ts
import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleDirectories: ['node_modules', '.'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  coverageDirectory: './tests/coverage',
  moduleNameMapper: {
    '@exmpl/(.*)': '<rootDir>/$1',
  },
}
export default config
