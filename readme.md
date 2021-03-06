# @thebespokepixel/string

> A collection of enhanced formats and utilities for strings.

##### Publishing Status

[![npm](https://img.shields.io/npm/v/@thebespokepixel/string?logo=npm)](https://www.npmjs.com/package/@thebespokepixel/string "npm") [![David](https://david-dm.org/thebespokepixel/string/master/status.svg)](https://david-dm.org/thebespokepixel/string/master "David")  
 [![Travis](https://img.shields.io/travis/com/thebespokepixel/string/master?logo=travis)](https://travis-ci.com/thebespokepixel/string "Travis") [![Rollup](https://img.shields.io/badge/es6-module%3Amjs_%E2%9C%94-64CA39?&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZmlsbD0iI0ZGMzMzMyIgZD0iTTEwLjkwNDI4MjQsMy4wMDkxMDY4MyBDMTEuMjM4NzA1NSwzLjU4MjgzNzEzIDExLjQyODU3MTQsNC4yNDQ4MzM2MyAxMS40Mjg1NzE0LDQuOTUwOTYzMjIgQzExLjQyODU3MTQsNi40MTc4NjM0IDEwLjYwODY5NTcsNy42OTU2MjE3MiA5LjM5MTgyNzM5LDguMzc2NTMyNCBDOS4zMDU1MjQ2OCw4LjQyNDg2ODY1IDkuMjczMTYxMTYsOC41MzIwNDkwNCA5LjMxODQ3MDA5LDguNjE4MjEzNjYgTDExLjQyODU3MTQsMTMgTDUuMjU4NjgyODEsMTMgTDIuMzM5Nzc3MjMsMTMgQzIuMTUyMTIzNDUsMTMgMiwxMi44NDgyNzU3IDIsMTIuNjUzODA0OCBMMiwxLjM0NjE5NTIyIEMyLDEuMTU0OTk2ODggMi4xNDgzMTU0MywxIDIuMzM5Nzc3MjMsMSBMNy42NjAyMjI3NywxIEM3LjcwMTU0MTQ5LDEgNy43NDExMzc2NCwxLjAwNzM1NTg4IDcuNzc3NzY2NTgsMS4wMjA5MDQyOSBDOS4wNjQ1MzgyOCwxLjE0NDU0MDA0IDEwLjE3MzM4ODQsMS44NTM4NTI5MSAxMC44MjIyOTQ5LDIuODcyNTA0MzggQzEwLjc5OTE5NTMsMi44NDQ4NDgwNiAxMC44NDQ0OTkxLDIuOTQ5MTc0NzYgMTAuOTA0MjgyNCwzLjAwOTEwNjgzIFoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjMxIiBkPSJNOC44NTcxNDI4NiwzLjU3MTQyODU3IEw2LjcxNDI4NTcxLDYuNTcxNDI4NTcgTDkuMjg1NzE0MjksNS4yODU3MTQyOSBDOS4yODU3MTQyOSw1LjI4NTcxNDI5IDkuNzE0Mjg1NzEsNC44NTcxNDI4NiA5LjI4NTcxNDI5LDQuNDI4NTcxNDMgQzkuMjg1NzE0MjksNCA4Ljg1NzE0Mjg2LDMuNTcxNDI4NTcgOC44NTcxNDI4NiwzLjU3MTQyODU3IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGQkIwNDAiIGQ9Ik0yLjg0Njc0NjAzLDEyLjk5NTg0OTUgQzMuMjY0OTIwNjIsMTIuOTk1ODQ5NSAzLjE4NTkzMDM0LDEyLjk0NjM2NjkgMy4zMTYxMTYzOCwxMi44NzM5MDU0IEMzLjYxODE3NTg3LDEyLjcwNTc3OTMgNS42ODk0NDA5OSw4LjcxMjc4NDU5IDcuNzE3NTU0NzYsNi44MjEzNjYwMiBDOS43NDU2Njg1Miw0LjkyOTk0NzQ2IDEwLjAwNDU3NjcsNS41NjA0MjAzMiA4Ljg4NDc5ODk1LDMuNTAyOTc3MjMgQzguODg0Nzk4OTUsMy41MDI5NzcyMyA5Ljc0NzgyNjA5LDUuMTQyMjA2NjUgOS4wMTQyNTMwMiw1LjI2ODMwMTIzIEM4LjQzODE4MjQxLDUuMzY3MDc1MzEgNy4xMTk5MDg0Nyw0LjEyMjk0MjIxIDcuNjExODMzOTMsMy4wMDQ5MDM2OCBDOC4wOTA4MTM5OSwxLjkxNDE4NTY0IDEwLjAxOTY3OTYsMi4xMjAxNDAxMSAxMC45MDY0NCwzLjAwOTEwNjgzIEMxMC44NzgzOTE2LDIuOTYyODcyMTUgMTAuODUwMzQzMiwyLjkxNjYzNzQ4IDEwLjgyMjI5NDksMi44NzI1MDQzOCBDMTAuMzA0NDc4NiwyLjI1MjUzOTQgOS41MDQwMjA5MiwxLjkwMzY3Nzc2IDguNzEwMDM1OTYsMS45MDM2Nzc3NiBDNy4xOTk3Mzg0OCwxLjkwMzY3Nzc2IDYuODIwMDA2NTQsMi40MjY5NzAyMyAzLjkyMDIzNTM3LDcuNjE5OTY0OTcgQzIuMzg3Nzk5MzQsMTAuMzY1NDA2NyAyLjAxMDgzMTkzLDExLjU3MzUwNzkgMi4wMDYyOTA2OSwxMi4xNjk4MTgyIEMyLDEyLjk5NTg0OTUgMi4wMDYyOTA2OSwxMi45OTU4NDk1IDIuODQ2NzQ2MDMsMTIuOTk1ODQ5NSBaIi8%2BCiAgPC9nPgo8L3N2Zz4K)](https://github.com/rollup/rollup/wiki/pkg.module "Rollup")   

##### Development Status

[![Travis](https://img.shields.io/travis/com/thebespokepixel/string/develop?logo=travis)](https://travis-ci.com/thebespokepixel/string "Travis") [![David](https://david-dm.org/thebespokepixel/string/develop/status.svg)](https://david-dm.org/thebespokepixel/string/develop "David") [![David-developer](https://david-dm.org/thebespokepixel/string/develop/dev-status.svg)](https://david-dm.org/thebespokepixel/string/develop?type=dev "David-developer")  
 [![Snyk](https://snyk.io/test/github/thebespokepixel/string/badge.svg)](https://snyk.io/test/github/thebespokepixel/string "Snyk") [![Code-climate](https://api.codeclimate.com/v1/badges/57bf94c1bc96b928b8cd/maintainability)](https://codeclimate.com/github/thebespokepixel/string/maintainability "Code-climate") [![Coverage](https://api.codeclimate.com/v1/badges/57bf94c1bc96b928b8cd/test_coverage)](https://codeclimate.com/github/thebespokepixel/string/test_coverage "Coverage")   

##### Documentation/Help

[![Inch](https://inch-ci.org/github/thebespokepixel/string.svg?branch=master&style=shields)](https://inch-ci.org/github/thebespokepixel/string "Inch") [![Twitter](https://img.shields.io/twitter/follow/thebespokepixel?style=social)](https://twitter.com/thebespokepixel "Twitter")   


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

Unless the environment has `TERM_FONT=full` set (see [Term-NG][termNG]) and you have a Unicode terminal font that supports sub/super-script characters, then it will fall back to printing normal characters.

##### Character set (Github display is incomplete)

| Class       | Numerals     | Symbols      | Lower case                   | Upper case                   |                              |
| ----------- | ------------ | ------------ | ---------------------------- | ---------------------------- | ---------------------------- |
| Basic       | `0123456789` | \`+-=:()/    | . \`                         | `abcdefghijklmnopqrstuvwxyz` | `ABCDEFGHIJKLMNOPQRSTUVWXYZ` |
| Superscript | `⁰¹²³⁴⁵⁶⁷⁸⁹` | `⁺⁻⁼⁼⁽⁾╵╵⋅ ` | `ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ` | `ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ` |                              |
| Subscript   | `₀₁₂₃₄₅₆₇₈₉` | `₊₋₌₌₍₎╷╷. ` | `ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ` | `ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ` |                              |

[termNG]: https://www.npmjs.com/package/term-ng


## Documentation

Full documentation can be found at [https://thebespokepixel.github.io/string/][1]

[1]: https://thebespokepixel.github.io/string/
