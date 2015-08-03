/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {

	var lambda = 2.5;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the probability density function', function test() {
		var data, actual, expected, i;

		data = new Float64Array([
			-1.0, -0.5,  0.0,  0.5,  1.0,  1.5,  2.0,  2.5,  3.0,
			3.5,  4.0,  4.5,  5.0,  5.5,  6.0,  6.5,  7.0,  7.5,
			8.0,  8.5,  9.0,  9.5, 10.0
		]);
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, lambda );

		expected = new Float64Array([
			0.0000000e+00, 0.0000000e+00, 2.5000000e+00,
			7.1626199e-01, 2.0521250e-01, 5.8794365e-02,
			1.6844867e-02, 4.8261353e-03, 1.3827109e-03,
			3.9615331e-04, 1.1349982e-04, 3.2518244e-05,
			9.3166329e-06, 2.6692600e-06, 7.6475580e-07,
			2.1910621e-07, 6.2774979e-08, 1.7985333e-08,
			5.1528841e-09, 1.4763260e-09, 4.2297448e-10,
			1.2118422e-10, 3.4719860e-11
		]);

		for ( i = 0; i < actual.length; i++ ) {
			assert.closeTo( actual[ i ], expected[ i ], 1e-7 );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), lambda ), new Int8Array() );
	});

});
