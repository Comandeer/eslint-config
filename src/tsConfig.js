import * as globPatterns from './globPatterns.js';

export default {
	files: [
		globPatterns.tsFiles
	],

	rules: {
		'no-undef': 'off',
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
		} ],

		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'generic',
				readonly: 'generic'
			}
		],
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
		'@typescript-eslint/consistent-generic-constructors': [ 'error', 'constructor' ],
		'@typescript-eslint/consistent-indexed-object-style': [ 'error', 'record' ],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never'
			}
		],
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-exports': 'off',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports'
			}
		],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{
				accessibility: 'no-public'
			}
		],
		'@typescript-eslint/explicit-module-boundary-types': 'error',
		'@typescript-eslint/member-ordering': [
			'error',
			{
				default: {
					order: 'as-written'
				}
			}
		],
		'@typescript-eslint/method-signature-style': [ 'error', 'property' ],
		'@typescript-eslint/no-base-to-string': 'error',
		'@typescript-eslint/no-confusing-non-null-assertion': 'error',
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-duplicate-enum-values': 'error',
		'@typescript-eslint/no-duplicate-type-constituents': 'error',
		'@typescript-eslint/no-dynamic-delete': 'error',
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true
			}
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-extra-non-null-assertion': 'error',
		'@typescript-eslint/no-extraneous-class': 'off',
		'@typescript-eslint/no-floating-promises': [
			'error',
			{
				ignoreIIFE: true,
				ignoreVoid: false
			}
		],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-import-type-side-effects': 'error',
		'@typescript-eslint/no-inferrable-types': [
			'error',
			{
				ignoreParameters: true,
				ignoreProperties: true
			}
		],
		'@typescript-eslint/no-invalid-void-type': [
			'error',
			{
				allowInGenericTypeArguments: true,
				allowAsThisParameter: false
			}
		],
		'@typescript-eslint/no-meaningless-void-operator': [
			'error',
			{
				checkNever: true
			}
		],
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-misused-promises': 'error',
		'@typescript-eslint/no-mixed-enums': 'error',
		'@typescript-eslint/no-namespace': [
			'error',
			{
				allowDeclarations: false,
				allowDefinitionFiles: true
			}
		],
		'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
		'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-redundant-type-constituents': 'error',
		'@typescript-eslint/no-require-imports': 'error',
		'@typescript-eslint/no-this-alias': [
			'error',
			{
				allowDestructuring: true
			}
		],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/no-unnecessary-condition': [
			'error',
			{
				allowConstantLoopConditions: true
			}
		],
		'@typescript-eslint/no-unnecessary-qualifier': 'error',
		'@typescript-eslint/no-unnecessary-type-arguments': 'error',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unnecessary-type-constraint': 'error',
		'@typescript-eslint/no-unsafe-argument': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-declaration-merging': 'error',
		'@typescript-eslint/no-unsafe-enum-comparison': 'off',
		'@typescript-eslint/no-unsafe-function-type': 'error',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/no-useless-empty-export': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'@typescript-eslint/no-wrapper-object-types': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/parameter-properties': 'off',
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-enum-initializers': 'error',
		'@typescript-eslint/prefer-for-of': 'off',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': [
			'error',
			{
				ignoreTernaryTests: false,
				ignoreConditionalTests: true,
				ignoreMixedLogicalExpressions: true
			}
		],
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/prefer-readonly': 'off',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/prefer-return-this-type': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/require-array-sort-compare': 'off',
		'@typescript-eslint/restrict-plus-operands': [
			'error',
			{
				allowAny: false,
				allowBoolean: false,
				allowNullish: false,
				allowNumberAndString: false,
				allowRegExp: false
			}
		],
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{
				allowNumber: true,
				allowBoolean: false,
				allowAny: false,
				allowNullish: false,
				allowRegExp: false,
				allowNever: false
			}
		],
		'@typescript-eslint/strict-boolean-expressions': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/typedef': 'off',
		'@typescript-eslint/unbound-method': [
			'error',
			{
				ignoreStatic: true
			}
		],
		'@typescript-eslint/unified-signatures': 'error'
	}
};
