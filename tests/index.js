import { dirname, resolve as resolvePath } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'ava';
import testRule from './__helpers__/testRule.js';

const __dirname = dirname( fileURLToPath( import.meta.url ) );
const fixturesPath = resolvePath( __dirname, '__fixtures__' );

test( 'it fails on incorrect code', testRule, {
	fixturePath: resolvePath( fixturesPath, 'invalid.js' ),
	errorCount: 1
} );

test( 'it passes on correct code', testRule, {
	fixturePath: resolvePath( fixturesPath, 'valid.js' )
} );

// #21
test( 'it allows space after async keyword in arrow functions', testRule, {
	fixturePath: resolvePath( fixturesPath, 'asyncArrow.js' )
} );

// #23
test( 'disallows console usage', testRule, {
	fixturePath: resolvePath( fixturesPath, 'console.js' ),
	errorCount: 4
} );

// #32
test( 'disallows test environment globals in source files', testRule, {
	fixturePath: resolvePath( fixturesPath, 'testGlobals.js' ),
	fakePath: 'src/myTests.js',
	errorCount: 5
} );

// #32, #64
test( 'disallows test environment globals in test files', testRule, {
	fixturePath: resolvePath( fixturesPath, 'testGlobals.js' ),
	fakePath: 'tests/myTests.js',
	errorCount: 5
} );

// #37
test( 'allows async functions without await', testRule, {
	fixturePath: resolvePath( fixturesPath, 'asyncNoAwait.js' ),
	errorCount: 0
} );

// #37
test( 'allows generators without yield', testRule, {
	fixturePath: resolvePath( fixturesPath, 'generatorNoYield.js' ),
	errorCount: 0
} );

// #38
test( 'parses ES2021 code', testRule, {
	fixturePath: resolvePath( fixturesPath, 'es2021.js' ),
	errorCount: 0
} );

// #49
test( 'allows incorrect JSDoc syntax', testRule, {
	fixturePath: resolvePath( fixturesPath, 'invalidJSDoc.js' ),
	errorCount: 0
} );

// #51
test( 'parses ES2022 code', testRule, {
	fixturePath: resolvePath( fixturesPath, 'privateFields.js' ),
	errorCount: 0
} );

// #53
test( 'recognizes globalThis global variable', testRule, {
	fixturePath: resolvePath( fixturesPath, 'globalThis.js' ),
	errorCount: 0
} );

// #53
test( 'recognizes globalThis global variable in tests', testRule, {
	fixturePath: resolvePath( fixturesPath, 'globalThis.js' ),
	fakePath: 'tests/globalThis.js',
	errorCount: 0
} );

// #57
test( 'lints TS file', testRule, {
	fixturePath: resolvePath( fixturesPath, 'valid.ts' ),
	errorCount: 0
} );
