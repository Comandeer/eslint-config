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

export const testRule = test.macro( async ( t, {
	fixtureName,
	expectedErrorCount = 0,
	fakePath = fixtureName,
	tsConfig,
	configFile
} = {} ) => {
	const { stdout, stderr } = await lintFile( {
		fixtureName,
		fakePath,
		tsConfig,
		configFile
	} );

	t.is( stderr, '', 'ESLint did not raise any errors' );

	const matched = stdout.match( resultRegex );
	const matchedCount = matched?.groups?.count ?? 0;

	t.is( Number( matchedCount ), expectedErrorCount );
} );

async function lintFile( {
	fixtureName,
	fakePath,
	tsConfig,
	configFile
} ) {
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

		const { stdout, stderr } = await execa( 'eslint', [
			'--no-ignore',
			'--c',
			configFile ?? defaultConfigFilePath,
			fakePath
		], {
			cwd: tempDirPath,
			preferLocal: true,
			reject: false
		} );

		return {
			stdout,
			stderr
		};
	} );
}
