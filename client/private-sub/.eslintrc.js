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
