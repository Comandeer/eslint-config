const { join: joinPath } = require( 'path' );

module.exports = {
	plugins: [
		'ava',
		'@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	globals: {
		globalThis: 'readonly'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 13,
		ecmaFeatures: {
			impliedStrict: true
		}
	},

	overrides: [
		{
			files: [ '**/*.ts', '**/*.mts' ],
			parserOptions: {
				project: joinPath( __dirname, './tsconfig.json' )
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
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'error',
				'no-dupe-class-members': 'off',
				'@typescript-eslint/no-dupe-class-members': 'error',
				'no-extra-semi': 'off',
				'@typescript-eslint/no-extra-semi': 'error',
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': 'error',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': 'error',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [ 'error', {
					functions: false
				} ],
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
				'@typescript-eslint/space-infix-ops': 'error'
			}

		},

		{
			files: [ 'tests/**/*.js' ],
			excludedFiles: [ 'tests/__fixtures__/**/*.js' ],
			rules: {
				'ava/assertion-arguments': 'error',
				'ava/hooks-order': 'error',
				'ava/max-asserts': 'off',
				'ava/no-async-fn-without-await': 'error',
				'ava/no-duplicate-modifiers': 'error',
				'ava/no-identical-title': 'error',
				'ava/no-ignored-test-files': 'off',
				'ava/no-import-test-files': 'error',
				'ava/no-incorrect-deep-equal': 'error',
				'ava/no-inline-assertions': 'error',
				'ava/no-nested-tests': 'error',
				'ava/no-only-test': 'error',
				'ava/no-skip-assert': 'error',
				'ava/no-skip-test': 'error',
				'ava/no-todo-implementation': 'error',
				'ava/no-todo-test': 'error',
				'ava/no-unknown-modifiers': 'error',
				'ava/prefer-async-await': 'error',
				'ava/prefer-power-assert': 'off',
				'ava/prefer-t-regex': 'error',
				'ava/test-title': 'error',
				'ava/test-title-format': 'off',
				'ava/use-t': 'error',
				'ava/use-t-throws-async-well': 'error',
				'ava/use-t-well': 'error',
				'ava/use-test': 'error',
				'ava/use-true-false': 'error'
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
		'indent': [ 'error', 'tab' ],
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
		'quotes': [ 'error', 'single' ],
		'require-atomic-updates': 'error',
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
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'wrap-iife': [ 'error', 'outside' ],
		'yield-star-spacing': [ 'error', 'after' ],
		'yoda': [ 'error', 'never' ]
	}
};
