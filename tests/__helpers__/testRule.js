import { cp, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import test from 'ava';
import { execa } from 'execa';
import { dirname, resolve as resolvePath } from 'pathe';
import { temporaryDirectoryTask } from 'tempy';

const __dirname = dirname( fileURLToPath( import.meta.url ) );
const defaultConfigFilePath = resolvePath( __dirname, '..', '..', 'eslint.config.js' );
const fixtureDirPath = resolvePath( __dirname, '..', '__fixtures__' );
const resultRegex = / (?<count>\d+) problem/u;

export default test.macro( async ( t, {
	fixtureName,
	expectedErrorCount = 0,
	fakePath = fixtureName,
	tsConfig
} = {} ) => {
	const result = await lintFile( fixtureName, fakePath, tsConfig );
	const matched = result.match( resultRegex );
	const matchedCount = matched?.groups?.count ?? 0;

	t.is( Number( matchedCount ), expectedErrorCount );
} );

async function lintFile( fixtureName, fakePath, tsConfig ) {
	const fixtureFilePath = resolvePath( fixtureDirPath, fixtureName );

	return temporaryDirectoryTask( async ( tempDirPath ) => {
		const fixtureTempFilePath = resolvePath( tempDirPath, fakePath );

		await cp( fixtureFilePath, fixtureTempFilePath, {
			recursive: true
		} );

		if ( tsConfig ) {
			const tsConfigFilePath = resolvePath( tempDirPath, 'tsconfig.json' );

			await writeFile( tsConfigFilePath, JSON.stringify( tsConfig ), 'utf-8' );
		}

		const { stdout } = await execa( 'eslint', [
			'--c',
			defaultConfigFilePath,
			fakePath
		], {
			cwd: tempDirPath,
			preferLocal: true,
			extendEnv: true,
			env: {
				ESLINT_USE_FLAT_CONFIG: true
			},
			reject: false
		} );

		return stdout;
	} );
}
