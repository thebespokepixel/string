/*
	@thebespokepixel/number
	Esoteric string formatting
*/

const termNG = require('term-ng')

const superScript = Symbol()
const subScript = Symbol()

const charSet = {
	basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|'
}

charSet[superScript] = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵'
charSet[subScript] = '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'

const typist = (string_, range_) => {
	let output = ''
	string_.split('').forEach(digit_ => {
		const subIndx = charSet.basic.indexOf(digit_)
		output += subIndx >= 0 ? charSet[range_][subIndx] : digit_
	})
	return output
}

exports.pad = (string_, char_, length_) => {
	return (length_ > 0) ?
		(char_.repeat(length_) + string_).slice(-length_) :
		(string_ + char_.repeat(-length_)).slice(0, -length_)
}

exports.toSubscript = string_ => {
	return typist(string_, termNG.font.enhanced ? subScript : 'basic')
}

exports.toSuperscript = string_ => {
	return typist(string_, termNG.font.enhanced ? superScript : 'basic')
}

