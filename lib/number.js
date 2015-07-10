'use strict';

// FUNCTIONS //

var exp = Math.exp;


// PDF //

/**
* FUNCTION: pdf( x, lambda )
*	Evaluates the probability density function (PDF) for a Exponential distribution with rate parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, lambda ) {
	if ( x >= 0 ) {
		return lambda * exp( -lambda*x );
	} else {
		return 0;
	}
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
