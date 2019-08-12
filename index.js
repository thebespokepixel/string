'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var termNG = _interopDefault(require('term-ng'));
var boxen = _interopDefault(require('boxen'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

class BespokeString {
  constructor(str) {
    this._string = String(str);
  }

  charSets(set_) {
    return {
      basic: '0123456789+-=:. abcdefghijklmnopqrstuvwxyz()ABCDEFGHIJKLMNOPQRSTUVWXYZ/|',
      super: '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁼⋅ ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵍʳˢᵗᵘᵛʷˣʸᶻ⁽⁾ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᴼᴿˢᵀᵁⱽᵂˣʸᶻ╵╵',
      sub: '₀₁₂₃₄₅₆₇₈₉₊₋₌₌. ₐₓₓₓₑₓₓₕᵢⱼₖₗₘₙₒₚₓᵣₛₜᵤᵥₓₓₓₓ₍₎ᴀʙcᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ╷╷'
    }[set_];
  }

  original(original_) {
    this._original = original_._original ? original_._original : original_;
    return this;
  }

  typist(printer_) {
    return (this._original ? this._original.valueOf() : this.valueOf()).split('').map(char_ => printer_(char_)).join('');
  }

  toSuperSub(set) {
    const setOut = termNG.font.enhanced ? this.charSets(set) : this.charSets('basic');
    return new BespokeString(this.typist(char_ => {
      const subIndx = this.charSets('basic').indexOf(char_);
      return subIndx >= 0 ? setOut[subIndx] : char_;
    })).original(this);
  }

  pad(length = 8, char = ' ') {
    return new BespokeString(length > 0 ? (this + char.repeat(length)).slice(0, length) : (char.repeat(-length) + this).slice(length));
  }

  toSub() {
    return this.toSuperSub('sub');
  }

  toSuper() {
    return this.toSuperSub('super');
  }

  asEmoji() {
    return new BespokeString(`${this} `).original(this);
  }

  inBox(options = {}) {
    return new BespokeString(boxen(this.valueOf(), _objectSpread2({
      borderColor: 'blue',
      borderStyle: 'round',
      dimBorder: true,
      padding: {
        left: 3,
        right: 3
      },
      margin: {
        top: 1,
        bottom: 1,
        left: 1,
        right: 1
      }
    }, options)), this);
  }

  valueOf() {
    return this._string;
  }

  toString() {
    return this._string.toString();
  }

}

function bespokeString(str) {
  return new BespokeString(str);
}

function pad(str, length, char) {
  return new BespokeString(str).pad(length, char).toString();
}

function box(str, options) {
  return bespokeString(str).inBox(options).toString();
}

function toSubscript(str) {
  return bespokeString(str).toSub().toString();
}

function toSuperscript(str) {
  return bespokeString(str).toSuper().toString();
}

function emoji(str) {
  return bespokeString(str).asEmoji().toString();
}

exports.BespokeString = BespokeString;
exports.bespokeString = bespokeString;
exports.box = box;
exports.emoji = emoji;
exports.pad = pad;
exports.toSubscript = toSubscript;
exports.toSuperscript = toSuperscript;
