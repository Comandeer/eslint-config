import babelParser from '@babel/eslint-parser';
import babelPlugin from '@babel/eslint-plugin';
import envPreset from '@babel/preset-env';
import importAttributesSyntaxPlugin from '@babel/plugin-syntax-import-attributes';
import stylisticPlugin from '@stylistic/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import typescript from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import * as globPatterns from './globPatterns.js';

export default [
	{
		ignores: [
			'bin/**/*',
			'build/**/*',
			'dist/**/*',
			'tests/__fixtures__/**/*'
		]
	},

	{
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
				globalThis: 'readonly'
			},

			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2023,
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
				project: [ './tsconfig.json', './packages/*/tsconfig.json' ]
			}
		}
	}
];
