/*
	@thebespokepixel/number
	Esoteric string formatting
*/

import termNG from 'term-ng'

const charSet = {
	basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|',
	super: '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵',
	sub: '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
}

const typist = (string_, printer_) => {
	let output = ''
	string_.split('').forEach(char_ => {
		output += printer_(char_)
	})
	return output
}

export function toSubscript(string_) {
	const setOut = termNG.font.enhanced ? charSet.sub : charSet.basic
	return typist(string_, char_ => {
		const subIndx = charSet.basic.indexOf(char_)
		return subIndx >= 0 ? setOut[subIndx] : char_
	})
}

export function toSuperscript(string_) {
	const setOut = termNG.font.enhanced ? charSet.super : charSet.basic
	return typist(string_, char_ => {
		const subIndx = charSet.basic.indexOf(char_)
		return subIndx >= 0 ? setOut[subIndx] : char_
	})
}

export function emoji(string_) {
	// Total naïve implentation right now, just pad wide emoji chars with a space.
	return `${string_} `
}
