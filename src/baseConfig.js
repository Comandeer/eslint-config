import stylisticPlugin from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import * as globPatterns from './globPatterns.js';

export function baseConfig( {
	tsProject = [ './tsconfig.json' ]
} = {} )  {
	return [
		{
			ignores: [
				'**/bin/**/*',
				'**/build/**/*',
				'**/dist/**/*',
				'**/tests/__fixtures__/**/*'
			]
		},

		{
			languageOptions: {
				globals: {
					...globals.nodeBuiltin,
					globalThis: 'readonly'
				},

				sourceType: 'module',
				ecmaVersion: 'latest',
				parserOptions: {
					ecmaFeatures: {
						impliedStrict: true
					}
				}
			}
		},

		{
			files: [
				globPatterns.allFiles
			],

			plugins: {
				'@stylistic': stylisticPlugin
			}
		},

		{
			files: [
				globPatterns.tsFiles
			],

			plugins: {
				'@typescript-eslint': typescript
			},

			languageOptions: {
				parser: typescriptParser,
				parserOptions: {
					sourceType: 'module',
					project: tsProject
				}
			}
		}
	];
}
