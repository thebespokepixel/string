'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})

function _interopDefault(ex) {
	return (ex && (typeof ex === 'object') && 'default' in ex) ? ex.default : ex
}

const termNG = _interopDefault(require('term-ng'))
const boxen = _interopDefault(require('boxen'))

class BespokeString {
	constructor(str) {
		this._string = String(str)
	}

	charSets(set_) {
		return {
			basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|',
			super: '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵',
			sub: '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
		}[set_]
	}

	original(original_) {
		this._original = original_._original ? original_._original : original_
		return this
	}

	typist(printer_) {
		return (this._original ? this._original.valueOf() : this.valueOf()).split('').map(char_ => printer_(char_)).join('')
	}

	pad(length = 8, char = ' ') {
		return new BespokeString(length > 0 ? (this + char.repeat(length)).slice(0, length) : (char.repeat(-length) + this).slice(length))
	}

	toSub() {
		const setOut = termNG.font.enhanced ? this.charSets('sub') : this.charSets('basic')
		return new BespokeString(this.typist(char_ => {
			const subIndx = this.charSets('basic').indexOf(char_)
			return subIndx >= 0 ? setOut[subIndx] : char_
		})).original(this)
	}

	toSuper() {
		const setOut = termNG.font.enhanced ? this.charSets('super') : this.charSets('basic')
		return new BespokeString(this.typist(char_ => {
			const subIndx = this.charSets('basic').indexOf(char_)
			return subIndx >= 0 ? setOut[subIndx] : char_
		})).original(this)
	}

	asEmoji() {
		return new BespokeString(`${this} `).original(this)
	}

	inBox(options_ = {}) {
		return new BespokeString(boxen(this.valueOf(), Object.assign({
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
			}
		}, options_)), this)
	}

	valueOf() {
		return this._string
	}

	toString() {
		return this._string.toString()
	}
}

function bespokeString(str) {
	return new BespokeString(str)
}

function pad(str, length, char) {
	return new BespokeString(str).pad(length, char).toString()
}

function box(str, options) {
	return bespokeString(str).inBox(options).toString()
}

function toSubscript(str) {
	return bespokeString(str).toSub().toString()
}

function toSuperscript(str) {
	return bespokeString(str).toSuper().toString()
}

function emoji(str) {
	return bespokeString(str).asEmoji().toString()
}

exports.BespokeString = BespokeString
exports.bespokeString = bespokeString
exports.pad = pad
exports.box = box
exports.toSubscript = toSubscript
exports.toSuperscript = toSuperscript
exports.emoji = emoji

