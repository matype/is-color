const rgbRegex = require('rgb-regex')
const rgbaRegex = require('rgba-regex')
const hslRegex = require('hsl-regex')
const hslaRegex = require('hsla-regex')
const hexRegex = require('hex-color-regex')
const keywords = require('css-color-names')

const isValidRgb = function (matches) {
    for (var i in matches) {
        if (matches[i] < 0 || matches[i] > 255)
            return false;
    }

    return true;
}

const isRgb = function (str) {
    var matches = rgbRegex({ exact: true }).exec(str);

    if (!matches) return false;

    return isValidRgb(matches.slice(1));
}

const isRgba = function (str) {
    var matches = rgbaRegex({ exact: true }).exec(str);

    if (!matches || matches[4] < 0 || matches[4] > 1) return false;

    return isValidRgb(matches.slice(1, 4));
}

const isHsl = function (str) { return hslRegex({ exact: true }).test(str) }
const isHsla = function (str) { return hslaRegex({ exact: true }).test(str) }
const isHex = function (str) { return hexRegex({ exact: true }).test(str) }
const isKeyword = function (str) { return keywords[str] ? true : false }
const isInherit = function (str) { return str === 'inherit' }
const isCurrentColor = function (str) { return str === 'currentColor' || str === 'currentcolor' }
const isTransparent = function (str) { return str === 'transparent' }
const isColor = function (str) { return isRgb(str) || isRgba(str) || isHsl(str) || isHsla(str) || isHex(str) || isKeyword(str) || isInherit(str) || isCurrentColor(str) || isTransparent(str) }

module.exports = isColor
module.exports.isRgb = isRgb
module.exports.isRgba = isRgba
module.exports.isHsl = isHsl
module.exports.isHsla = isHsla
module.exports.isHex = isHex
module.exports.isKeyword = isKeyword
module.exports.isInherit = isInherit
module.exports.isCurrentColor = isCurrentColor
module.exports.isTransparent = isTransparent
