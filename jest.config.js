module.exports = {
    name: 'ms_carrier',
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0
      }
    },
    collectCoverageFrom: [
      '**/src/**/*.ts',
      '!**/**/config/**',
      '!src/app.ts',
      '!**/helpers/initSentry/index.ts',
      '!**/helpers/setupShutdown/index.ts',
      '!**/**/middlewares/requestLogger/index.ts'
    ],
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ['routes'],
    testMatch: ['**/**/**/*.test.ts'],
    coverageDirectory: './coverage',
    clearMocks: true,
    restoreMocks: true,
    reporters: ['default']
  }
  