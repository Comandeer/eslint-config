/*! @comandeer/eslint-config v0.17.0 | (c) 2025 Comandeer | MIT license (see LICENSE) */
import r from"@babel/eslint-parser";import e from"@babel/eslint-plugin";import t from"@babel/preset-env";import o from"@babel/plugin-syntax-import-attributes";import s from"@stylistic/eslint-plugin";import n from"@typescript-eslint/parser";import i from"@typescript-eslint/eslint-plugin";import p from"globals";import a from"eslint-plugin-ava";const l="**/*.{js,cjs,mjs,ts,cts,mts}",c="**/*.{ts,cts,mts}";function y({tsProject:a=["./tsconfig.json"]}={}){return[{ignores:["**/bin/**/*","**/build/**/*","**/dist/**/*","**/tests/__fixtures__/**/*"]},{languageOptions:{globals:{...p.nodeBuiltin,globalThis:"readonly"},sourceType:"module",ecmaVersion:"latest",parserOptions:{ecmaFeatures:{impliedStrict:!0}}}},{files:[l],plugins:{"@babel":e,"@stylistic":s},languageOptions:{parser:r,parserOptions:{requireConfigFile:!1,sourceType:"module",babelOptions:{babelrc:!1,configFile:!1,presets:[t],plugins:[[o,{deprecatedAssertSyntax:!0}]]}}}},{files:[c],plugins:{"@typescript-eslint":i},languageOptions:{parser:n,parserOptions:{sourceType:"module",project:a}}}]}function f({allowDefaultExports:r=[]}={}){return[{files:[l],rules:{"constructor-super":"error","default-case":"off",eqeqeq:["error","smart"],"for-direction":"error","getter-return":["error",{allowImplicit:!0}],"new-cap":"off","@babel/new-cap":"error","no-array-constructor":"error","no-async-promise-executor":"error","no-await-in-loop":"error","no-case-declarations":"error","no-class-assign":"error","no-compare-neg-zero":"error","no-cond-assign":"error","no-console":"error","no-const-assign":"error","no-constant-condition":"error","no-control-regex":"error","no-debugger":"error","no-delete-var":"error","no-dupe-args":"error","no-dupe-class-members":"error","no-dupe-keys":"error","no-duplicate-case":"error","no-empty":"error","no-empty-character-class":"error","no-empty-pattern":"error","no-ex-assign":"error","no-extend-native":"error","no-extra-boolean-cast":"error","no-fallthrough":"error","no-func-assign":"error","no-global-assign":"error","no-implicit-coercion":["error",{allow:["!!"]}],"no-inner-declarations":"error","no-invalid-regexp":"error","no-lonely-if":"error","no-misleading-character-class":"error","no-native-reassign":"error","no-new-object":"error","no-new-symbol":"error","no-obj-calls":"error","no-octal":"error","no-proto":"error","no-prototype-builtins":"error","no-redeclare":"error","no-regex-spaces":"error","no-return-await":"error","no-self-assign":"error","no-shadow-restricted-names":"error","no-sparse-arrays":"error","no-this-before-super":"error","no-undef":"error","no-unexpected-multiline":"error","no-unreachable":"error","no-unsafe-finally":"error","no-unsafe-negation":"error","no-unused-labels":"error","no-unused-vars":"error","no-use-before-define":["error",{functions:!1}],"no-useless-catch":"error","no-useless-escape":"error","no-var":"error","no-with":"error","prefer-arrow-callback":"error","prefer-const":"error","prefer-rest-params":"error","prefer-spread":"error","prefer-template":"error","require-atomic-updates":"error","use-isnan":"error","valid-typeof":"error",yoda:["error","never"]}},{files:[l],ignores:[...r,"**/*.config.{js,mjs,ts,mts}"],rules:{"no-restricted-syntax":["error",{selector:"ExportDefaultDeclaration",message:"Use a named export instead of the default one."}]}}]}const u={files:[`**/tests/${l}`],plugins:{ava:a},rules:{"ava/assertion-arguments":"error","ava/hooks-order":"error","ava/max-asserts":"off","ava/no-async-fn-without-await":"error","ava/no-duplicate-modifiers":"error","ava/no-identical-title":"error","ava/no-ignored-test-files":"off","ava/no-import-test-files":"error","ava/no-incorrect-deep-equal":"error","ava/no-inline-assertions":"error","ava/no-nested-tests":"error","ava/no-only-test":"error","ava/no-skip-assert":"error","ava/no-skip-test":"error","ava/no-todo-implementation":"error","ava/no-todo-test":"error","ava/no-unknown-modifiers":"error","ava/prefer-async-await":"error","ava/prefer-power-assert":"off","ava/prefer-t-regex":"error","ava/test-title":"error","ava/test-title-format":"off","ava/use-t":"error","ava/use-t-throws-async-well":"error","ava/use-t-well":"error","ava/use-test":"error","ava/use-true-false":"error"}},d={files:[c],rules:{"no-undef":"off","no-array-constructor":"off","@typescript-eslint/no-array-constructor":"error","no-dupe-class-members":"off","@typescript-eslint/no-dupe-class-members":"error","no-redeclare":"off","@typescript-eslint/no-redeclare":"error","no-unused-vars":"off","@typescript-eslint/no-unused-vars":"error","no-use-before-define":"off","@typescript-eslint/no-use-before-define":["error",{functions:!1}],"@typescript-eslint/adjacent-overload-signatures":"error","@typescript-eslint/array-type":["error",{default:"generic",readonly:"generic"}],"@typescript-eslint/await-thenable":"error","@typescript-eslint/class-literal-property-style":["error","fields"],"@typescript-eslint/consistent-generic-constructors":["error","constructor"],"@typescript-eslint/consistent-indexed-object-style":["error","record"],"@typescript-eslint/consistent-type-assertions":["error",{assertionStyle:"as",objectLiteralTypeAssertions:"never"}],"@typescript-eslint/consistent-type-definitions":"off","@typescript-eslint/consistent-type-exports":"off","@typescript-eslint/consistent-type-imports":["error",{prefer:"type-imports"}],"@typescript-eslint/explicit-function-return-type":"error","@typescript-eslint/explicit-member-accessibility":["error",{accessibility:"no-public"}],"@typescript-eslint/explicit-module-boundary-types":"error","@typescript-eslint/member-ordering":["error",{default:{order:"as-written"}}],"@typescript-eslint/method-signature-style":["error","property"],"@typescript-eslint/no-base-to-string":"error","@typescript-eslint/no-confusing-non-null-assertion":"error","@typescript-eslint/no-confusing-void-expression":"error","@typescript-eslint/no-duplicate-enum-values":"error","@typescript-eslint/no-duplicate-type-constituents":"error","@typescript-eslint/no-dynamic-delete":"error","@typescript-eslint/no-empty-interface":["error",{allowSingleExtends:!0}],"@typescript-eslint/no-explicit-any":"error","@typescript-eslint/no-extra-non-null-assertion":"error","@typescript-eslint/no-extraneous-class":"off","@typescript-eslint/no-floating-promises":["error",{ignoreIIFE:!0,ignoreVoid:!1}],"@typescript-eslint/no-for-in-array":"error","@typescript-eslint/no-import-type-side-effects":"error","@typescript-eslint/no-inferrable-types":["error",{ignoreParameters:!0,ignoreProperties:!0}],"@typescript-eslint/no-invalid-void-type":["error",{allowInGenericTypeArguments:!0,allowAsThisParameter:!1}],"@typescript-eslint/no-meaningless-void-operator":["error",{checkNever:!0}],"@typescript-eslint/no-misused-new":"error","@typescript-eslint/no-misused-promises":"error","@typescript-eslint/no-mixed-enums":"error","@typescript-eslint/no-namespace":["error",{allowDeclarations:!1,allowDefinitionFiles:!0}],"@typescript-eslint/no-non-null-asserted-nullish-coalescing":"error","@typescript-eslint/no-non-null-asserted-optional-chain":"error","@typescript-eslint/no-non-null-assertion":"off","@typescript-eslint/no-redundant-type-constituents":"error","@typescript-eslint/no-require-imports":"error","@typescript-eslint/no-this-alias":["error",{allowDestructuring:!0}],"@typescript-eslint/no-unnecessary-boolean-literal-compare":"error","@typescript-eslint/no-unnecessary-condition":["error",{allowConstantLoopConditions:!0}],"@typescript-eslint/no-unnecessary-qualifier":"error","@typescript-eslint/no-unnecessary-type-arguments":"error","@typescript-eslint/no-unnecessary-type-assertion":"error","@typescript-eslint/no-unnecessary-type-constraint":"error","@typescript-eslint/no-unsafe-argument":"off","@typescript-eslint/no-unsafe-assignment":"off","@typescript-eslint/no-unsafe-call":"off","@typescript-eslint/no-unsafe-declaration-merging":"error","@typescript-eslint/no-unsafe-enum-comparison":"off","@typescript-eslint/no-unsafe-function-type":"error","@typescript-eslint/no-unsafe-member-access":"off","@typescript-eslint/no-unsafe-return":"off","@typescript-eslint/no-useless-empty-export":"error","@typescript-eslint/no-var-requires":"error","@typescript-eslint/no-wrapper-object-types":"error","@typescript-eslint/non-nullable-type-assertion-style":"error","@typescript-eslint/parameter-properties":"off","@typescript-eslint/prefer-as-const":"error","@typescript-eslint/prefer-enum-initializers":"error","@typescript-eslint/prefer-for-of":"off","@typescript-eslint/prefer-function-type":"error","@typescript-eslint/prefer-includes":"error","@typescript-eslint/prefer-literal-enum-member":"error","@typescript-eslint/prefer-namespace-keyword":"error","@typescript-eslint/prefer-nullish-coalescing":["error",{ignoreTernaryTests:!1,ignoreConditionalTests:!0,ignoreMixedLogicalExpressions:!0}],"@typescript-eslint/prefer-optional-chain":"error","@typescript-eslint/prefer-readonly":"off","@typescript-eslint/prefer-readonly-parameter-types":"off","@typescript-eslint/prefer-reduce-type-parameter":"error","@typescript-eslint/prefer-regexp-exec":"off","@typescript-eslint/prefer-return-this-type":"error","@typescript-eslint/prefer-string-starts-ends-with":"error","@typescript-eslint/prefer-ts-expect-error":"error","@typescript-eslint/promise-function-async":"off","@typescript-eslint/require-array-sort-compare":"off","@typescript-eslint/restrict-plus-operands":["error",{allowAny:!1,allowBoolean:!1,allowNullish:!1,allowNumberAndString:!1,allowRegExp:!1}],"@typescript-eslint/restrict-template-expressions":["error",{allowNumber:!0,allowBoolean:!1,allowAny:!1,allowNullish:!1,allowRegExp:!1,allowNever:!1}],"@typescript-eslint/strict-boolean-expressions":"error","@typescript-eslint/switch-exhaustiveness-check":"error","@typescript-eslint/triple-slash-reference":"error","@typescript-eslint/typedef":"off","@typescript-eslint/unbound-method":["error",{ignoreStatic:!0}],"@typescript-eslint/unified-signatures":"error"}};function m({tsProject:r=["./tsconfig.json"],allowDefaultExports:e=[]}={}){return[...y({tsProject:r}),...f({allowDefaultExports:e}),d,u]}export{m as eslintConfig};
//# sourceMappingURL=eslint-config.mjs.map
