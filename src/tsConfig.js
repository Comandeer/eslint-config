import typescriptParser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin';
import * as globPatterns from './globPatterns.js';

export default {
	files: [
		globPatterns.tsFiles
	],

	plugins: {
		'@typescript-eslint': typescript
	},

	languageOptions: {
		parser: typescriptParser,
		parserOptions: {
			project: './tsconfig.json'
		}
	},

	rules: {
		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': 'error',
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': [ 'error', {
			functions: false
		} ]
	}
};
