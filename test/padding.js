import test from 'ava'
import {bespokeString, pad} from '..'

test('Basic padding 12345 with " ", -10 chars (left pad)', t => {
	t.is(pad('12345', -10), '     12345')
})

test('Basic padding 12345 with " ", 10 chars (right pad)', t => {
	t.is(pad('12345', 10), '12345     ')
})

test('Long arrow padding → with "─", -8 chars (left pad)', t => {
	t.is(pad('→', -8, '─'), '───────→')
})

test('Chainable padding 12345 with " ", 10 chars (right pad)', t => {
	t.is(bespokeString('12345').pad(10).toString(), '12345     ')
})

test('Chainable padding 12345 with " ", 8 chars (right pad) with "─" 12 chars (right pad)', t => {
	t.is(bespokeString('12345').pad(8).pad(12, '─').toString(), '12345   ────')
})
