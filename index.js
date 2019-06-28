module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		mocha: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019,
		ecmaFeatures: {
			impliedStrict: true
		}
	},
	rules: {
		'constructor-super': 'error',
		'for-direction': 'error',
		'no-async-promise-executor': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-const-assign': 'error',
		'no-constant-condition': 'error',
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': 'error',
		'no-empty-character-class': 'error',
		'no-empty-pattern': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-self-assign': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-labels': 'error',
		'no-unused-vars': 'error',
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'require-atomic-updates': 'error',
		'require-yield': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		indent: [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'unix' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		curly: 'error',
		'brace-style': [ 'error', '1tbs' ],
		camelcase: [ 'error', {
			properties: 'always'
		} ],
		'comma-spacing': [ 'error', {
			before: false,
			after: true
		} ],
		'comma-style': [ 'error', 'last' ],
		'comma-dangle': [ 'error', 'never' ],
		'key-spacing': [ 'error', {
			mode: 'strict',
			beforeColon: false,
			afterColon: true
		} ],
		'keyword-spacing': 'error',
		'block-spacing': 'error',
		'array-bracket-spacing': [ 'error', 'always' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', 'never' ],
		'generator-star-spacing': [ 'error', 'after' ],
		'yield-star-spacing': [ 'error', 'after' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'arrow-spacing': [ 'error', {
			before: true,
			after: true
		} ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-body-style': [ 'error', 'always' ],
		'no-trailing-spaces': 'error',
		'no-multiple-empty-lines': [ 'error', {
			max: 1
		} ],
		'eol-last': 'error',
		'valid-jsdoc': 'error',
		'no-implicit-coercion': [ 'error', {
			allow: [ '!!' ]
		} ],
		'no-native-reassign': 'error',
		'no-extend-native': 'error',
		'wrap-iife': [ 'error', 'outside' ],
		'yoda': [ 'error', 'never' ],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		'prefer-template': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'no-array-constructor': 'error',
		'no-new-object': 'error',
		'new-cap': 'error',
		'new-parens': 'error',
		'no-lonely-if': 'error',
		'no-use-before-define': 'error',
		'no-with': 'error',
		'eqeqeq': [ 'error', 'smart' ],
		'getter-return': [ 'error', {
			allowImplicit: true
		} ],
		'no-await-in-loop': 'error',
		'dot-location': [ 'error', 'object' ],
		'dot-notation': 'error',
		'array-callback-return': 'error',
		'no-proto': 'error',
		'no-return-await': 'error',
		'func-style': [ 'error', 'declaration', {
			allowArrowFunctions: true
		} ],
		'require-await': 'error'
	}
};
