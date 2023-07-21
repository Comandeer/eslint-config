import globals from 'globals';
import * as globPatterns from './globPatterns.js';

export default {
	ignores: globPatterns.ignoredFiles,

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
};
