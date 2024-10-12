import * as globPatterns from '../globPatterns.js';

export const jsConfig = {
	files: [
		globPatterns.allFiles
	],

	rules: {
		'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
		'array-callback-return': 'error',
		'arrow-body-style': [ 'error', 'always' ],
		'@stylistic/arrow-parens': [ 'error', 'always' ],
		'@stylistic/arrow-spacing': [ 'error', {
			after: true,
			before: true
		} ],
		'@stylistic/block-spacing': 'error',
		'@stylistic/brace-style': [ 'error', '1tbs' ],
		camelcase: [ 'error', {
			properties: 'always'
		} ],
		'@stylistic/comma-dangle': [ 'error', 'never' ],
		'@stylistic/comma-spacing': [ 'error', {
			after: true,
			before: false
		} ],
		'@stylistic/comma-style': [ 'error', 'last' ],
		'@stylistic/computed-property-spacing': [ 'error', 'always' ],
		curly: 'error',
		'@stylistic/dot-location': [ 'error', 'object' ],
		'dot-notation': 'error',
		'@stylistic/eol-last': 'error',
		'func-style': [ 'error', 'declaration', {
			allowArrowFunctions: true
		} ],
		'@stylistic/generator-star-spacing': [ 'error', 'after' ],
		'@stylistic/indent': [ 'error', 'tab' ],
		'@stylistic/key-spacing': [ 'error', {
			afterColon: true,
			beforeColon: false,
			mode: 'strict'
		} ],
		'@stylistic/keyword-spacing': 'error',
		'@stylistic/linebreak-style': [ 'error', 'unix' ],
		'@stylistic/new-parens': 'error',
		'@stylistic/no-extra-semi': 'error',
		'no-irregular-whitespace': 'error',
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/no-multiple-empty-lines': [ 'error', {
			max: 1
		} ],
		'@stylistic/no-trailing-spaces': 'error',
		'object-curly-spacing': 'off',
		'@stylistic/object-curly-spacing': 'off',
		'@babel/object-curly-spacing': [ 'error', 'always' ],
		'object-shorthand': [ 'error', 'always' ],
		'@stylistic/quotes': [ 'error', 'single' ],
		'@stylistic/semi': 'error',
		'@stylistic/space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'@stylistic/space-in-parens': [ 'error', 'always' ],
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/space-unary-ops': 'error',
		'@stylistic/spaced-comment': [ 'error', 'always' ],
		'@stylistic/wrap-iife': [ 'error', 'outside' ],
		'@stylistic/yield-star-spacing': [ 'error', 'after' ]
	}
};
