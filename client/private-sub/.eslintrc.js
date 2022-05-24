<<<<<<< HEAD
module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
    },
    extends: ['eslint:recommended', 'plugin:react/jsx-runtime'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['*.css'],
    plugins: ['react'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
};
=======
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["*.css"],
  plugins: ["react"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
>>>>>>> 5cfbe0f6facb9cfb364a611875c1d46b7a9fb0bd
