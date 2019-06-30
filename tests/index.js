const { CLIEngine } = require( 'eslint' );
const chai = require( 'chai' );
const config = require( '../index' );

const expect = chai.expect; // eslint-disable-line no-unused-vars

describe( 'eslint-config', () => {
	it( 'fails on incorrect code', () => {
		const cli = new CLIEngine( config );
		const report = cli.executeOnFiles( [ `${ __dirname }/fixtures/invalid.js` ] );
		const errors = CLIEngine.getErrorResults( report.results );

		expect( errors ).to.have.lengthOf( 1 );
		expect( errors[ 0 ] ).to.include.keys( 'errorCount' );
	} );

	it( 'passes on correct code', () => {
		const cli = new CLIEngine( config );
		const report = cli.executeOnFiles( [ `${ __dirname }/fixtures/valid.js` ] );
		const errors = CLIEngine.getErrorResults( report.results );

		expect( errors ).to.have.lengthOf( 0 );
	} );

	// #21
	it( 'allows space after async keyword in arrow functions', () => {
		const cli = new CLIEngine( config );
		const report = cli.executeOnFiles( [ `${ __dirname }/fixtures/asyncArrow.js` ] );
		const errors = CLIEngine.getErrorResults( report.results );

		expect( errors ).to.have.lengthOf( 0 );
	} );
} );
