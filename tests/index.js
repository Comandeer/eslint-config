const { readFile } = require( 'fs' ).promises;
const { resolve: resolvePath } = require( 'path' );
const { ESLint } = require( 'eslint' );
const defaultConfig = require( '../index' );

describe( 'eslint-config', () => {
	const fixturesPath = resolvePath( __dirname, 'fixtures' );

	it( 'fails on incorrect code', createTest( {
		fixturePath: resolvePath( fixturesPath, 'invalid.js' ),
		errorCount: 1
	} ) );

	it( 'passes on correct code', createTest( {
		fixturePath: resolvePath( fixturesPath, 'valid.js' )
	} ) );

	// #21
	it( 'allows space after async keyword in arrow functions', createTest( {
		fixturePath: resolvePath( fixturesPath, 'asyncArrow.js' )
	} ) );

	// #23
	it( 'disallows console usage', createTest( {
		fixturePath: resolvePath( fixturesPath, 'console.js' ),
		errorCount: 4
	} ) );

	// #32
	it( 'disallows test environment globals in source files', createTest( {
		fixturePath: resolvePath( fixturesPath, 'testGlobals.js' ),
		fakePath: 'src/myTests.js',
		errorCount: 5
	} ) );

	// #32
	it( 'allows test environment globals in test files', createTest( {
		fixturePath: resolvePath( fixturesPath, 'testGlobals.js' ),
		fakePath: 'tests/myTests.js',
		errorCount: 0
	} ) );

	// #37
	it( 'allows async functions without await', createTest( {
		fixturePath: resolvePath( fixturesPath, 'asyncNoAwait.js' ),
		errorCount: 0
	} ) );

	// #37
	it( 'allows generators without yield', createTest( {
		fixturePath: resolvePath( fixturesPath, 'generatorNoYield.js' ),
		errorCount: 0
	} ) );
} );

function createTest( {
	fixturePath,
	config = defaultConfig,
	fakePath = fixturePath,
	errorCount = 0
} = {} ) {
	return async () => {
		const [ results ] = await lintFile( fixturePath, config, fakePath );

		expect( results.errorCount ).to.equal( errorCount );
	};
}

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
