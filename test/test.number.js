/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number pdf', function tests() {

	var lambda = 10;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the probability density function', function test() {
		assert.closeTo( pdf( 2, lambda), 2.0611536e-08, 1e-7 );
		assert.closeTo( pdf( 20, lambda), 1.3838965e-86, 1e-7 );
		assert.closeTo( pdf( 200, lambda), 0, 1e-7 );
	});

});
