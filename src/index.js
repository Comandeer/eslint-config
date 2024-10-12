import { baseConfig } from './baseConfig.js';
import { jsConfig } from './jsConfig.js';
import { testConfig } from './testConfig.js';
import { tsConfig } from './tsConfig.js';

export function eslintConfig( {
	tsProject = [ './tsconfig.json' ]
} = {} ) {
	return [
		...baseConfig( { tsProject } ),
		jsConfig,
		tsConfig,
		testConfig
	];
}
