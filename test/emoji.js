import test from 'ava'
import {emoji} from '..'

test(`Emoji → 🤔`, t => {
	t.is(emoji('🤔'), '🤔 ')
})

