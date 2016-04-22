# Bespoke String Extensions  
>A augmented drop-in console replacement that supports logging levels. 
>
>![Project status][project-badge]
[![npm Status][npm-badge]][npm]
[![XO code style][xo-badge]][xo]
[![Chat on Gitter][gitter-badge]][gitter]  
[![Build Status][build-badge]][travis]
[![Dependency Status][david-badge]][david]
[![devDependency Status][david-dev-badge]][david-dev]

### Install

```sh
npm install @thebespokepixel/strings --save
```

### Usage

```js
const bString = require('@thebespokepixel/string')

console.log(bString.subScript('String to print'))
```

### API

#### .pad(string, char, length)

Pads `string`, using `char` to `length` characters. If length is negative, pads the right rather than the left of `string`. If length is less than `string.length`, it will crop `string` to fit.

#### .toSuperscript(string) | .toSubscript(string)

Prints the string using the alternative super/sub characters available in Unicode (Such as in DejaVu Sans Mono or Source Code Pro). Superscript support is much more complete that Subscript. Unavaiable subscript characters will be printed as `ₓ`, 

Unless the environment has `TERM_FONT=full` set (see [Term-NG][termNG]) and you have a Unicode terminal font that supports sub/super-script characters, then it will fall back to printing normal characters.

##### Character set

| Class       | Numerals   | Symbols   | Lower case                 | Upper case                 |
|-------------|------------|-----------|----------------------------|----------------------------|
| Basic       | 0123456789 | +-=:()/|. | abcdefghijklmnopqrstuvwxyz | ABCDEFGHIJKLMNOPQRSTUVWXYZ | 
| Superscript | ⁰¹²³⁴⁵⁶⁷⁸⁹ | ⁺⁻⁼⁼⁽⁾╵╵⋅ | ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ | ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ |
| Subscript   | ₀₁₂₃₄₅₆₇₈₉ | ₊₋₌₌₍₎╷╷. | ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ | ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ |

[termNG]: https://www.npmjs.com/package/term-ng

[project-badge]: http://img.shields.io/badge/status-alpha-red.svg?style=flat
[build-badge]: http://img.shields.io/travis/MarkGriffiths/string.svg?branch=master&style=flat
[david-badge]: http://img.shields.io/david/MarkGriffiths/string.svg?style=flat
[david-dev-badge]: http://img.shields.io/david/dev/MarkGriffiths/string.svg?style=flat
[npm-badge]: https://img.shields.io/npm/v/string.svg?style=flat
[xo-badge]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[gitter-badge]: https://badges.gitter.im/MarkGriffiths/help.svg

[travis]: https://travis-ci.org/MarkGriffiths/string
[david]: https://david-dm.org/MarkGriffiths/string
[david-dev]: https://david-dm.org/MarkGriffiths/string#info=devDependencies
[npm]: https://www.npmjs.com/package/@thebespokepixel/string
[xo]: https://github.com/sindresorhus/xo
[gitter]: https://gitter.im/MarkGriffiths/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
