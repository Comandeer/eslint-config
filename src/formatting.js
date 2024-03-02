import baseConfig from './baseConfig.js';
import jsConfig from './formatting/jsConfig.js';
import tsConfig from './formatting/tsConfig.js';

export default function( {
	tsProject = [ './tsconfig.json' ]
} = {} ) {
	return [
		...baseConfig( { tsProject } ),
		jsConfig,
		tsConfig
	];
}
