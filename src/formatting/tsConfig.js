import * as globPatterns from '../globPatterns.js';

export default {
	files: [
		globPatterns.tsFiles
	],

	rules: {
		'@babel/semi': 'off',
		'@typescript-eslint/semi': [ 'error', 'always' ],

		'@typescript-eslint/member-delimiter-style': 'error',
		'@typescript-eslint/type-annotation-spacing': [
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
