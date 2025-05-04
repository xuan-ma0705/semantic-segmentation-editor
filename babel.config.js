module.exports = {
    presets: [
      ['@babel/preset-env', { "targets": { "node": "12" } }],       // 转换 ES6+ 语法
      '@babel/preset-react'      // 处理 JSX
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs', // 强制转换 ESM 到 CommonJS
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-nullish-coalescing-operator"
    ]
};