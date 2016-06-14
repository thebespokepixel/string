'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})

function _interopDefault(ex) {
	return (ex && (typeof ex === 'object') && 'default' in ex) ? ex.default : ex
}

var termNG = _interopDefault(require('term-ng'))
var boxen = _interopDefault(require('boxen'))

class BespokeString extends String {
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
		return (this._original ? this._original : this).split('').map(char_ => printer_(char_)).join('')
	}

	pad(char_, length_) {
		return length_ > 0 ? (char_.repeat(length_) + this).slice(-length_) : (this + char_.repeat(-length_)).slice(0, -length_)
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
		return new BespokeString(`${this} `, this)
	}

	inBox(options_) {
		return new BespokeString(boxen(this, Object.assign({
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
}

function bespokeString(string_) {
	return new BespokeString(string_)
}

function pad(string_, char_, length_) {
	return bespokeString(string_).pad(char_, length_).toString()
}

function box(string_, options_) {
	return bespokeString(string_).inBox(options_).toString()
}

function toSubscript(string_) {
	return bespokeString(string_).toSub().toString()
}

function toSuperscript(string_) {
	return bespokeString(string_).toSuper().toString()
}

function emoji(string_) {
	return bespokeString(string_).asEmoji().toString()
}

exports.BespokeString = BespokeString
exports.bespokeString = bespokeString
exports.pad = pad
exports.box = box
exports.toSubscript = toSubscript
exports.toSuperscript = toSuperscript
exports.emoji = emoji
