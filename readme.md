# @thebespokepixel/string

> A collection of enhanced formats and utilities for strings.

##### Status

![Status](https://img.shields.io/badge/status-beta-blue.svg?style=flat) [![npm](https://img.shields.io/npm/v/@thebespokepixel/string.svg?style=flat&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU%2BbnBtPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IGZpbGwtb3BhY2l0eT0iLjMiIGZpbGw9IiMwMDAiIHg9IjIiIHk9IjExIiB3aWR0aD0iMTAiIGhlaWdodD0iMiIgcng9IjEiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMiAyaDEwdjEwSDJ6Ii8%2BPHBhdGggZmlsbD0iI0MxMjEyNyIgZD0iTTMgMTFoNFY1aDJ2NmgyVjNIM3oiLz48L2c%2BPC9zdmc%2B)](https://www.npmjs.com/package/@thebespokepixel/string "npm") [![Travis](https://img.shields.io/travis/MarkGriffiths/string.svg?branch=master&style=flat)](https://travis-ci.org/MarkGriffiths/string "Travis") [![David](https://img.shields.io/david/MarkGriffiths/string.svg?branch=master&style=flat)](https://david-dm.org/MarkGriffiths/string/master "David")  
 [![Code-climate](https://codeclimate.com/github/MarkGriffiths/string/badges/gpa.svg?style=flat)](https://codeclimate.com/github/MarkGriffiths/string "Code-climate") [![Coverage](https://codeclimate.com/github/MarkGriffiths/string/badges/coverage.svg?style=flat)](https://codeclimate.com/github/MarkGriffiths/string/coverage "Coverage") [![Snyk](https://snyk.io/test/github/MarkGriffiths/string/badge.svg?style=flat)](https://snyk.io/test/github/MarkGriffiths/string "Snyk")   

##### Developer

[![David-developer](https://img.shields.io/david/dev/MarkGriffiths/string.svg?branch=master&style=flat)](https://david-dm.org/MarkGriffiths/string/master#info=devDependencies "David-developer") [![Greenkeeper badge](https://badges.greenkeeper.io/MarkGriffiths/string.svg)](https://greenkeeper.io/)    

##### Help

[![Inch](https://inch-ci.org/github/MarkGriffiths/string.svg?branch=master&style=shields)](https://inch-ci.org/github/MarkGriffiths/string "Inch") [![Gitter](https://img.shields.io/gitter/room/MarkGriffiths/help.svg?style=flat)](https://gitter.im/MarkGriffiths/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge "Gitter")       


## Usage

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

Unless the environment has `TERM_FONT=full` set (see [Term-NG][termng]) and you have a Unicode terminal font that supports sub/super-script characters, then it will fall back to printing normal characters.

##### Character set (Github display is incomplete)

| Class       | Numerals     | Symbols     | Lower case                   | Upper case                   |
| ----------- | ------------ | ----------- | ---------------------------- | ---------------------------- |
| Basic       | `0123456789` | `+-=:()/|.` | `abcdefghijklmnopqrstuvwxyz` | `ABCDEFGHIJKLMNOPQRSTUVWXYZ` |
| Superscript | `⁰¹²³⁴⁵⁶⁷⁸⁹` | `⁺⁻⁼⁼⁽⁾╵╵⋅` | `ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ` | `ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ` |
| Subscript   | `₀₁₂₃₄₅₆₇₈₉` | `₊₋₌₌₍₎╷╷.` | `ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ` | `ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ` |

[termng]: https://www.npmjs.com/package/term-ng


## Documentation

Full documentation can be found at [https://markgriffiths.github.io/string/][1]

[1]: https://markgriffiths.github.io/string/
