import baseConfig from './baseConfig.js';
import jsConfig from './jsConfig.js';
import testsConfig from './testsConfig.js';
import tsConfig from './tsConfig.js';

export default function( {
	tsProject = [ './tsconfig.json' ]
} = {} ) {
	return [
		...baseConfig( { tsProject } ),
		jsConfig,
		tsConfig,
		testsConfig
	];
}
