import test from 'ava';
import { testRule } from './__helpers__/testRule.js';

const defaultTSConfig = {
	compilerOptions: {
		strict: true
	}
};

test.serial( 'it fails on incorrect code', testRule, {
	fixtureName: 'invalid.js',
	expectedErrorCount: 1
} );

test.serial( 'it passes on correct code', testRule, {
	fixtureName: 'valid.js'
} );

// #21
test.serial( 'it allows space after async keyword in arrow functions', testRule, {
	fixtureName: 'asyncArrow.js'
} );

// #23
test.serial( 'disallows console usage', testRule, {
	fixtureName: 'console.js',
	expectedErrorCount: 4
} );

// #32
test.serial( 'disallows test environment globals in source files', testRule, {
	fixtureName: 'testGlobals.js',
	fakePath: 'src/myTests.js',
	expectedErrorCount: 5
} );

// #32, #64
test.serial( 'disallows test environment globals in test files', testRule, {
	fixtureName: 'testGlobals.js',
	fakePath: 'tests/myTests.js',
	expectedErrorCount: 5
} );

// #37
test.serial( 'allows async functions without await', testRule, {
	fixtureName: 'asyncNoAwait.js',
	expectedErrorCount: 0
} );

// #37
test.serial( 'allows generators without yield', testRule, {
	fixtureName: 'generatorNoYield.js',
	expectedErrorCount: 0
} );

// #38
test.serial( 'parses ES2021 code', testRule, {
	fixtureName: 'es2021.js',
	expectedErrorCount: 0
} );

// #49
test.serial( 'allows incorrect JSDoc syntax', testRule, {
	fixtureName: 'invalidJSDoc.js',
	expectedErrorCount: 0
} );

// #51
test.serial( 'parses ES2022 code', testRule, {
	fixtureName: 'privateFields.js',
	expectedErrorCount: 0
} );

// #53
test.serial( 'recognizes globalThis global variable', testRule, {
	fixtureName: 'globalThis.js',
	expectedErrorCount: 0
} );

// #53
test.serial( 'recognizes globalThis global variable in tests', testRule, {
	fixtureName: 'globalThis.js',
	fakePath: 'tests/globalThis.js',
	expectedErrorCount: 0
} );

// #57
test.serial( 'lints TS file', testRule, {
	fixtureName: 'valid.ts',
	expectedErrorCount: 0,
	tsConfig: defaultTSConfig
} );

// #74
test.serial( 'parses import assertions syntax', testRule, {
	fixtureName: 'importAssertionsSyntax.js',
	expectedErrorCount: 0
} );

// #74
test.serial( 'parses import attributes syntax', testRule, {
	fixtureName: 'importAttributesSyntax.js',
	expectedErrorCount: 0
} );

// #79
test.serial( 'no-undef rule is not used for TS code', testRule, {
	fixtureName: 'noUndef.ts',
	expectedErrorCount: 0,
	tsConfig: defaultTSConfig
} );

// #96
test.serial( 'wrapper types are not allowed in TS code', testRule, {
	fixtureName: 'wrapperTypes.ts',
	expectedErrorCount: 7,
	tsConfig: defaultTSConfig
} );

// #99
test.serial( 'importing types requires \'import type\'', testRule, {
	fixtureName: 'typeImports.ts',
	expectedErrorCount: 2,
	tsConfig: defaultTSConfig
} );

// #100
test.serial( 'disallow default exports', testRule, {
	fixtureName: 'exportDefault.js',
	expectedErrorCount: 1
} );
