'use strict'

import test from 'ava'
import {bespokeString, pad} from '..'

test(`Basic padding 12345/◌ 10 chars (left pad)`, t => {
	t.is(pad('12345', ' ', 10), '     12345')
})

test(`Basic padding 12345/◌ -10 chars (right pad)`, t => {
	t.is(pad('12345', ' ', -10), '12345     ')
})

test(`Long arrow padding →/─ 8 chars`, t => {
	t.is(pad('→', '─', 8), '───────→')
})

test(`Chainable padding 12345/◌ -10 chars (right pad)`, t => {
	t.is(bespokeString('12345').pad(' ', -10).toString(), '12345     ')
})
