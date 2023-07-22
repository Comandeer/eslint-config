import globals from 'globals';

export default {
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
