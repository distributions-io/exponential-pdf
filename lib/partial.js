'use strict';

// FUNCTIONS //

var exp = Math.exp;


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies rate parameter `lambda` and returns a function for evaluating the probability density function (PDF) for an exponential distribution.
*
* @param {Number} lambda - rate parameter
* @returns {Function} PDF
*/
function partial( lambda ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Exponential distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		if ( x >= 0 ) {
			return lambda * exp( -lambda*x );
		} else {
			return 0;
		}
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
