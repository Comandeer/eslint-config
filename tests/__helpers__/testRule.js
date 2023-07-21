import { readFile } from 'node:fs/promises';
import test from 'ava';
import { ESLint } from 'eslint';
import defaultConfig from '../../src/index.js';

export default test.macro( async ( t, {
	fixturePath,
	config = defaultConfig,
	fakePath = fixturePath,
	errorCount = 0
} = {} ) => {
	const  [ results ] = await lintFile( fixturePath, config, fakePath );

	t.is( results.errorCount, errorCount );
} );

async function lintFile( path, config, fakePath = path ) {
	const code = await readFile( path, 'utf8' );
	const eslint = new ESLint( {
		ignore: false,
		useEslintrc: false,
		baseConfig: config
	} );
	const report = await eslint.lintText( code, {
		filePath: fakePath
	} );

	return report;
}
