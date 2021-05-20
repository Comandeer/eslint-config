module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 12,
		ecmaFeatures: {
			impliedStrict: true
		}
	},

	overrides: [
		{
			files: [ 'tests/**/*.js' ],
			env: {
				browser: true,
				commonjs: true,
				es6: true,
				node: true,
				mocha: true
			},
			globals: {
				expect: 'readonly',
				sinon: 'readonly',
				proxyquire: 'readonly'
			}
		}
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
		'constructor-super': 'error',
		curly: 'error',
		'dot-location': [ 'error', 'object' ],
		'dot-notation': 'error',
		'eol-last': 'error',
		'eqeqeq': [ 'error', 'smart' ],
		'for-direction': 'error',
		'func-style': [ 'error', 'declaration', {
			allowArrowFunctions: true
		} ],
		'generator-star-spacing': [ 'error', 'after' ],
		'getter-return': [ 'error', {
			allowImplicit: true
		} ],
		indent: [ 'error', 'tab' ],
		'key-spacing': [ 'error', {
			afterColon: true,
			beforeColon: false,
			mode: 'strict'
		} ],
		'keyword-spacing': 'error',
		'linebreak-style': [ 'error', 'unix' ],
		'new-cap': 'error',
		'new-parens': 'error',
		'no-array-constructor': 'error',
		'no-async-promise-executor': 'error',
		'no-await-in-loop': 'error',
		'no-case-declarations': 'error',
		'no-class-assign': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-console': 'error',
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
		'no-extend-native': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [ 'error', {
			allow: [ '!!' ]
		} ],
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-lonely-if': 'error',
		'no-misleading-character-class': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': [ 'error', {
			max: 1
		} ],
		'no-native-reassign': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-return-await': 'error',
		'no-self-assign': 'error',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'error',
		'no-this-before-super': 'error',
		'no-trailing-spaces': 'error',
		'no-undef': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'no-unused-labels': 'error',
		'no-unused-vars': 'error',
		'no-use-before-define': [ 'error', {
			functions: false
		} ],
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-var': 'error',
		'no-with': 'error',
		'object-curly-spacing': [ 'error', 'always' ],
		'object-shorthand': [ 'error', 'always' ],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		quotes: [ 'error', 'single' ],
		'require-atomic-updates': 'error',
		semi: [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],
		'space-in-parens': [ 'error', 'always' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'use-isnan': 'error',
		'valid-jsdoc': 'error',
		'valid-typeof': 'error',
		'wrap-iife': [ 'error', 'outside' ],
		'yield-star-spacing': [ 'error', 'after' ],
		'yoda': [ 'error', 'never' ]
	}
};
