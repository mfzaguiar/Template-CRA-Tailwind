module.exports = {
    env: {
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'import/no-unresolved': 0,
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
        'no-use-before-define': 'off',
        'import/extensions': ['error', 'never'],
        'no-shadow': 'off',
    },
};
