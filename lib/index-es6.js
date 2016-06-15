import termNG from 'term-ng'
import boxen from 'boxen'

class BespokeString {
	constructor(string_) {
		this._string = String(string_)
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

	pad(char_, length_) {
		return new BespokeString(length_ > 0 ? (this + char_.repeat(length_)).slice(0, length_) : (char_.repeat(-length_) + this).slice(length_))
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

	inBox(options_) {
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

function bespokeString(string_) {
	return new BespokeString(string_)
}

function pad(string_, char_, length_) {
	return new BespokeString(string_).pad(char_, length_).toString()
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

export {BespokeString, bespokeString, pad, box, toSubscript, toSuperscript, emoji}
