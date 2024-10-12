import * as globPatterns from '../globPatterns.js';

export const tsConfig = {
	files: [
		globPatterns.tsFiles
	],

	rules: {
		'@stylistic/member-delimiter-style': 'error',
		'@stylistic/type-annotation-spacing': [
			'error',
			{
				before: false,
				after: true,
				overrides: {
					arrow: {
						before: true,
						after: true
					}
				}
			}
		]
	}
};
