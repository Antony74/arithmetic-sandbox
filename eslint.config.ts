import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        ignores: ['node_modules/', 'dist/', 'build/', '.vite/', 'coverage/'],
    },
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
        },
        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'no-restricted-syntax': [
                'error',
                'FunctionExpression',
                'FunctionDeclaration',
            ],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2024,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-undef': 'off', // TypeScript handles this
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        },
    },
];
