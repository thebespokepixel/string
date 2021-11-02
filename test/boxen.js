import test from 'ava'
import {bespokeString} from '../index.js'

test('inBox → Boxed string', t => {
	t.is(
		bespokeString('Hello world!')
			.inBox({
				borderColor: null,
				dimBorder: false,
			})
			.toString(),
		'\n ╭──────────────────╮\n │   Hello world!   │\n ╰──────────────────╯\n',
	)
})
