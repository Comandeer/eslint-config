import { eslintConfig } from '../../../src/index.js'

export default [
	...eslintConfig( {
		allowDefaultExports: [
			'**/index.js'
		]
	} )
];
