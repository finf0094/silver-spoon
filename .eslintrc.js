module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-indent': [2, 4],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/indent': [2, 4],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/naming-convention': 'off'
    },
    globals: {
        __IS_DEV__: true
    }
}
