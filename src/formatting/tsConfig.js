import typescriptParser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin';
import * as globPatterns from '../globPatterns.js';

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
		'brace-style': 'off',
		'@typescript-eslint/brace-style': [ 'error', '1tbs' ],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': [ 'error', 'never' ],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': [ 'error', {
			after: true,
			before: false
		} ],
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'error',
		'indent': 'off',
		'@typescript-eslint/indent': [ 'error', 'tab' ],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': 'error',
		'no-extra-semi': 'off',
		'@typescript-eslint/no-extra-semi': 'error',
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],
		'quotes': 'off',
		'@typescript-eslint/quotes': [ 'error', 'single' ],
		'semi': 'off',
		'@typescript-eslint/semi': [ 'error', 'always' ],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': 'error',

		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/type-annotation-spacing': [
			'error',
			{
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true
					}
				}
			}
		]
	}
};
