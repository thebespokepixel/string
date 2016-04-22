/*
	@thebespokepixel/number
	Esoteric string formatting
*/

exports.pad = (string_, char_, length_) => {
	return (length_ > 0) ?
		(char_.repeat(length_) + string_).slice(-length_) :
		(string_ + char_.repeat(-length_)).slice(0, -length_)
}

exports.toSub = string_ => {
	const charsO = '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
	const charsI = '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|'
	let output = ''
	string_.split('').forEach(digit_ => {
		output += charsO[charsI.indexOf(digit_)]
	})
	return output
}

exports.toSuper = string_ => {
	const charsO = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵'
	const charsI = '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|'
	let output = ''
	string_.split('').forEach(digit_ => {
		output += charsO[charsI.indexOf(digit_)]
	})
	return output
}

