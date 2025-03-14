import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import envPreset from '@babel/preset-env';
import importAttributesSyntaxPlugin from '@babel/plugin-syntax-import-attributes';
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
				'@babel': babelPlugin,
				'@stylistic': stylisticPlugin
			},

			languageOptions: {
				parser: babelParser,
				parserOptions: {
					requireConfigFile: false,
					sourceType: 'module',
					babelOptions: {
						babelrc: false,
						configFile: false,
						presets: [
							envPreset
						],
						plugins: [
							[
								importAttributesSyntaxPlugin,
								{
									deprecatedAssertSyntax: true
								}
							]
						]
					}
				}
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
