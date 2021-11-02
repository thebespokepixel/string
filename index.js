import termNG from 'term-ng';
import boxen from 'boxen';

class BespokeString {
	/**
	 * Contruct a BespokeString instance.
	 * @param  {String} content The string content.
	 */
	constructor(content) {
		this._string = String(content);
	}
	charSets(set_) {
		return {
			basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|',
			super: '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵',
			sub: '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
		}[set_]
	}
	original(original_) {
		this._original = original_._original ? original_._original : original_;
		return this
	}
	typist(printer_) {
		return (this._original ? this._original.valueOf() : this.valueOf())
			.split('')
			.map(char_ => printer_(char_))
			.join('')
	}
	toSuperSub(set) {
		const setOut = termNG.font.enhanced ? this.charSets(set) : this.charSets('basic');
		return new BespokeString(this.typist(char_ => {
			const subIndx = this.charSets('basic').indexOf(char_);
			return subIndx >= 0 ? setOut[subIndx] : char_
		})).original(this)
	}
	/**
	 * Pad the contents.
	 * @param  {Number} length [description]
	 * @param  {String} char   [description]
	 * @return {BespokeString} A BespokeString instance.
	 */
	pad(length = 8, char = ' ') {
		return new BespokeString((length > 0) ?
			(this + char.repeat(length)).slice(0, length) :
			(char.repeat(-length) + this).slice(length))
	}
	/**
	 * Transform the contents to subscript characters.
	 * @return {BespokeString} A BespokeString instance.
	 */
	toSub() {
		return this.toSuperSub('sub')
	}
	/**
	 * Transform the contents to superscript characters.
	 * @return {BespokeString} A BespokeString instance.
	 */
	toSuper() {
		return this.toSuperSub('super')
	}
	/**
	 * Print Emoji characters.
	 *
	 * Totally naïve implentation right now, just pad wide emoji chars with a space.
	 * @return {BespokeString} A BespokeString instance.
	 */
	asEmoji() {
		return new BespokeString(`${this} `).original(this)
	}
	/**
	 * Print the content as a graphic box.
	 * @param  {Object} options Boxen options.
	 * @return {BespokeString} A BespokeString instance.
	 */
	inBox(options = {}) {
		return new BespokeString(boxen(this.valueOf(), {
			borderColor: 'blue',
			borderStyle: 'round',
			dimBorder: true,
			padding: {
				left: 3,
				right: 3
			},
			margin: {
				top: 1,
				bottom: 1,
				left: 1,
				right: 1
			},
			...options
		}), this)
	}
	valueOf() {
		return this._string
	}
	toString() {
		return this._string.toString()
	}
}
/**
 * Helper method for creating a BespokeString instance
 * @param  {String} content - String content.
 * @return {BespokeString} A BespokeString instance.
 */
function bespokeString(content) {
	return new BespokeString(content)
}
/**
 * Helper method for padding a string.
 * @param  {String} content    The string to pad.
 * @param  {Number} length Target length.
 * @param  {String} char   Character to use for pad.
 * @return {String} The padded string.
 */
function pad(content, length, char) {
	return new BespokeString(content).pad(length, char).toString()
}
/**
 * Helper method for creating a visual box (using boxen)
 * @param  {String} content     Box content.
 * @param  {Object} options Boxen options.
 * @return {String} The contructed box.
 */
function box(content, options) {
	return bespokeString(content).inBox(options).toString()
}
/**
 * Helper method from creating a simple Unicode subscript representation.
 * @param  {String} content The string to transform to subscript.
 * @return {String} The subscript string.
 */
function toSubscript(content) {
	return bespokeString(content).toSub().toString()
}
/**
 * Helper method from creating a simple Unicode superscript representation.
 * @param  {String} content The string to transform to superscript.
 * @return {String} The superscript string.
 */
function toSuperscript(content) {
	return bespokeString(content).toSuper().toString()
}
/**
 * Helper method from creating a wide Emoji character.
 * @param  {String} content The emoji to print.
 * @return {String} The Emoji string.
 */
function emoji(content) {
	return bespokeString(content).asEmoji().toString()
}

export { BespokeString, bespokeString, box, emoji, pad, toSubscript, toSuperscript };
