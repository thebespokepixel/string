'use strict'

import test from 'ava'
import {toSubscript, toSuperscript, emoji, pad} from '..'

test(`Basic digits 123... → ¹²³⋅⋅⋅/₁₂₃...`, t => {
	t.plan(2)
	t.is(toSubscript('1234567890'), '₁₂₃₄₅₆₇₈₉₀')
	t.is(toSuperscript('1234567890'), '¹²³⁴⁵⁶⁷⁸⁹⁰')
})

test(`Pangram → ᵀʰᵉ/ᴛₕₑ`, t => {
	const pangram = 'The quick brown fox jumps over the lazy dog.'
	t.plan(2)
	t.is(toSubscript(pangram), 'ᴛₕₑ ₓᵤᵢₓₖ ₓᵣₒₓₙ ₓₒₓ ⱼᵤₘₚₛ ₒᵥₑᵣ ₜₕₑ ₗₐₓₓ ₓₒₓ.')
	t.is(toSuperscript(pangram), 'ᵀʰᵉ ᵍᵘⁱᶜᵏ ᵇʳᵒʷⁿ ᶠᵒˣ ʲᵘᵐᵖˢ ᵒᵛᵉʳ ᵗʰᵉ ˡᵃᶻʸ ᵈᵒᵍ⋅')
})

test(`Basic padding 12345/◌ 10 chars (left pad)`, t => {
	t.is(pad('12345', ' ', 10), '     12345')
})

test(`Basic padding 12345/◌ -10 chars (right pad)`, t => {
	t.is(pad('12345', ' ', -10), '12345     ')
})

test(`Long arrow padding →/─ 8 chars`, t => {
	t.is(pad('→', '─', 8), '───────→')
})

test(`Emoji → 🤔`, t => {
	t.is(emoji('🤔'), '🤔 ')
})

