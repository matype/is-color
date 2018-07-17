const rgbRegex = require('rgb-regex')
const rgbaRegex = require('rgba-regex')
const hslRegex = require('hsl-regex')
const hslaRegex = require('hsla-regex')
const hexRegex = require('hex-color-regex')
const keywords = require('css-color-names')

const isRgb = function (str) { return rgbRegex({exact: true}).test(str) }
const isRgba = function (str) { return rgbaRegex({exact: true}).test(str) }
const isHsl = function (str) { return hslRegex({exact: true}).test(str) }
const isHsla = function (str) { return hslaRegex({exact: true}).test(str) }
const isHex = function (str) { return hexRegex({exact: true}).test(str) }
const isKeyword = function (str) { return keywords.hasOwnProperty(str) }
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
