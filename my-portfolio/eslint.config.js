import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{ ignores: ['dist', 'node_modules'] },

	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier,
		},
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			indent: ['error', 'tab'],
			'no-tabs': 'off',
			'prettier/prettier': ['warn', { useTabs: true }],
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		},
	},

	{
		...eslintConfigPrettier,
	},
];
