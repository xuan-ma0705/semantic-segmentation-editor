module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  moduleNameMapper: {
    '^meteor/(.*)': '<rootDir>/tests/mocks/meteor.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',  // 这行代码的作用是将所有以 .js 或 .jsx 结尾的文件使用 babel-jest 转换
  },
  transformIgnorePatterns: [
    // 排除 node_modules 中无需转换的模块（Meteor 可能需要特殊处理）
    '/node_modules/(?!(meteor|enzyme|airbnb-prop-types|@wojtekmaj)/)'
  ],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)']
};