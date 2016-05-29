'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var termNG = _interopDefault(require('term-ng'));

const charSet = {
	basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|',
	super: '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵',
	sub: '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
};

const typist = (string_, printer_) => {
	let output = '';
	string_.split('').forEach(char_ => {
		output += printer_(char_);
	});
	return output;
};

function toSubscript(string_) {
	const setOut = termNG.font.enhanced ? charSet.sub : charSet.basic;
	return typist(string_, char_ => {
		const subIndx = charSet.basic.indexOf(char_);
		return subIndx >= 0 ? setOut[subIndx] : char_;
	});
}

function toSuperscript(string_) {
	const setOut = termNG.font.enhanced ? charSet.super : charSet.basic;
	return typist(string_, char_ => {
		const subIndx = charSet.basic.indexOf(char_);
		return subIndx >= 0 ? setOut[subIndx] : char_;
	});
}

function emoji(string_) {
	return `${ string_ } `;
}

exports.toSubscript = toSubscript;
exports.toSuperscript = toSuperscript;
exports.emoji = emoji;