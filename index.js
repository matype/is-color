const rgbRegex = require('rgb-regex')
const rgbaRegex = require('rgba-regex')
const hslRegex = require('hsl-regex')
const hslaRegex = require('hsla-regex')
const hexRegex = require('hex-color-regex')
const keywords = require('css-color-names')

const isRgb = str => rgbRegex({exact: true}).test(str)
const isRgba = str => rgbaRegex({exact: true}).test(str)
const isHsl = str => hslRegex({exact: true}).test(str)
const isHsla = str => hslaRegex({exact: true}).test(str)
const isHex = str => hexRegex({exact: true}).test(str)
const isKeyword = str => keywords[str] ? true : false
const isInherit = str => str === 'inherit'
const isCurrentColor = str => str === 'currentColor' || str === 'currentcolor'
const isTransparent = str => str === 'transparent'
const isColor = str => isRgb(str) || isRgba(str) || isHsl(str) || isHsla(str) || isHex(str) || isKeyword(str) || isInherit(str) || isCurrentColor(str) || isTransparent(str)

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
