import test from 'ava'
import {emoji} from '../index.js'

test('Emoji → 🤔', t => {
	t.is(emoji('🤔'), '🤔 ')
})

