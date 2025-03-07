import * as globPatterns from './globPatterns.js';

export const jsConfig = {
	files: [
		globPatterns.allFiles
	],

	rules: {
		'constructor-super': 'error',
		'default-case': 'off',
		'eqeqeq': [ 'error', 'smart' ],
		'for-direction': 'error',
		'getter-return': [ 'error', {
			allowImplicit: true
		} ],
		'new-cap': 'off',
		'@babel/new-cap': 'error',
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
		'no-fallthrough': 'error',
		'no-func-assign': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': [ 'error', {
			allow: [ '!!' ]
		} ],
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-lonely-if': 'error',
		'no-misleading-character-class': 'error',
		'no-native-reassign': 'error',
		'no-new-object': 'error',
		'no-new-symbol': 'error',
		'no-obj-calls': 'error',
		'no-octal': 'error',
		'no-proto': 'error',
		'no-prototype-builtins': 'error',
		'no-redeclare': 'error',
		'no-regex-spaces': 'error',
		'no-restricted-syntax': [
			'error', {
				'selector': 'ExportDefaultDeclaration',
				'message': 'Use a named export instead of the default one.'
			}
		],
		'no-return-await': 'error',
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
		'no-use-before-define': [ 'error', {
			functions: false
		} ],
		'no-useless-catch': 'error',
		'no-useless-escape': 'error',
		'no-var': 'error',
		'no-with': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-atomic-updates': 'error',
		'use-isnan': 'error',
		'valid-typeof': 'error',
		'yoda': [ 'error', 'never' ]
	}
};
