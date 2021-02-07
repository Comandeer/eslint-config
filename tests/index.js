const { readFile } = require( 'fs' ).promises;
const { resolve: resolvePath } = require( 'path' );
const { ESLint } = require( 'eslint' );
const chai = require( 'chai' );
const defaultConfig = require( '../index' );

const expect = chai.expect; // eslint-disable-line no-unused-vars

describe( 'eslint-config', () => {
	const fixturesPath = resolvePath( __dirname, 'fixtures' );

	it( 'fails on incorrect code', async () => {
		const fixturePath = resolvePath( fixturesPath, 'invalid.js' );
		const [ results ] = await lintFile( fixturePath, defaultConfig );

		expect( results.errorCount ).to.equal( 1 );
	} );

	it( 'passes on correct code', async () => {
		const fixturePath = resolvePath( fixturesPath, 'valid.js' );
		const [ results ] = await lintFile( fixturePath, defaultConfig );

		expect( results.errorCount ).to.equal( 0 );
	} );

	// #21
	it( 'allows space after async keyword in arrow functions', async () => {
		const fixturePath = resolvePath( fixturesPath, 'asyncArrow.js' );
		const [ results ] = await lintFile( fixturePath, defaultConfig );

		expect( results.errorCount ).to.equal( 0 );
	} );

	// #23
	it( 'disallows console usage', async () => {
		const fixturePath = resolvePath( fixturesPath, 'console.js' );
		const [ results ] = await lintFile( fixturePath, defaultConfig );

		expect( results.errorCount ).to.equal( 4 );
	} );
} );

async function lintFile( path, config, fakePath = path ) {
	const code = await readFile( path, 'utf8' );
	const eslint = new ESLint( {
		useEslintrc: false,
		baseConfig: config
	} );
	const report = await eslint.lintText( code, {
		filePath: fakePath
	} );

	return report;
}
