import * as globPatterns from '../globPatterns.js';

export default {
	files: [
		globPatterns.allFiles
	],

	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'array-callback-return': 'error',
		'arrow-body-style': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': [ 'error', {
			after: true,
			before: true
		} ],
		'block-spacing': 'error',
		'brace-style': [ 'error', '1tbs' ],
		camelcase: [ 'error', {
			properties: 'always'
		} ],
		'comma-dangle': [ 'error', 'never' ],
		'comma-spacing': [ 'error', {
			after: true,
			before: false
		} ],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'always' ],
		curly: 'error',
		'dot-location': [ 'error', 'object' ],
		'dot-notation': 'error',
		'eol-last': 'error',
		'func-style': [ 'error', 'declaration', {
			allowArrowFunctions: true
		} ],
		'generator-star-spacing': [ 'error', 'after' ],
		'indent': [ 'error', 'tab' ],
		'key-spacing': [ 'error', {
			afterColon: true,
			beforeColon: false,
			mode: 'strict'
		} ],
		'keyword-spacing': 'error',
		'linebreak-style': [ 'error', 'unix' ],
		'new-parens': 'error',
		'no-extra-semi': 'error',
		'no-irregular-whitespace': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': [ 'error', {
			max: 1
		} ],
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'object-shorthand': [ 'error', 'always' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'space-in-parens': [ 'error', 'always' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'wrap-iife': [ 'error', 'outside' ],
		'yield-star-spacing': [ 'error', 'after' ]
	}
};
