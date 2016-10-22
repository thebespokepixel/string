#### Installation

```shell
npm install --save @thebespokepixel/string
```

#### Example

```js
const bString = require('@thebespokepixel/string')

console.log(bString.subScript('String to print'))
```

#### .pad(string, char, length)

Pads `string`, using `char` to `length` characters. If length is negative, pads the right rather than the left of `string`. If length is less than `string.length`, it will crop `string` to fit.

#### .toSuperscript(string) | .toSubscript(string)

Prints the string using the alternative super/sub characters available in Unicode (Such as in DejaVu Sans Mono or Source Code Pro). Superscript support is much more complete that Subscript. Unavaiable subscript characters will be printed as `ₓ`. The character `Q` has to be approximated.

TODO: Use compound Unicode overlay characters to better approximate missing chars.

Unless the environment has `TERM_FONT=full` set (see [Term-NG][termNG]) and you have a Unicode terminal font that supports sub/super-script characters, then it will fall back to printing normal characters.

##### Character set (Github display is incomplete)

| Class       | Numerals   | Symbols   | Lower case                 | Upper case                 |
|-------------|------------|-----------|----------------------------|----------------------------|
| Basic       | `0123456789` | `+-=:()/|. ` | `abcdefghijklmnopqrstuvwxyz` | `ABCDEFGHIJKLMNOPQRSTUVWXYZ` | 
| Superscript | `⁰¹²³⁴⁵⁶⁷⁸⁹` | `⁺⁻⁼⁼⁽⁾╵╵⋅ ` | `ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ` | `ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ` |
| Subscript   | `₀₁₂₃₄₅₆₇₈₉` | `₊₋₌₌₍₎╷╷. ` | `ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ` | `ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ` |

[termNG]: https://www.npmjs.com/package/term-ng
