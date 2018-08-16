const SchemaType = require('./base/SchemaType');

/**
 * class that resolves numbers
 * @extends SchemaType
 * @since 0.5.0
 * @private
 */
class NumberType extends SchemaType {

	/**
	 * Resolves our data into a number
	 * @since 0.5.0
	 * @param {*} data The data to resolve
	 * @param {SchemaPiece} piece The piece this data should be resolving to
	 * @param {Language} language The language to throw from
	 * @returns {*} The resolved data
	 */
	async resolve(data, piece, language) {
		let number;
		switch (piece.type) {
			case 'integer':
				number = parseInt(data);
				if (Number.isInteger(number)) return number;
				throw language.get('RESOLVER_INVALID_INT', piece.key);
			case 'number':
			case 'float':
				number = parseFloat(data);
				if (!isNaN(number)) return number;
				throw language.get('RESOLVER_INVALID_FLOAT', piece.key);
		}
		// noop
		return null;
	}

}

module.exports = NumberType;
