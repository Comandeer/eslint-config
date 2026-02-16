import * as globPatterns from '../globPatterns.js';

export const tsConfig = {
	files: [
		globPatterns.tsFiles
	],

	rules: {
		'@stylistic/arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'@stylistic/member-delimiter-style': 'error',
		'@stylistic/type-annotation-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		]
	}
};
