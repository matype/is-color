var isRgb = require('./lib/isRgb')
var isRgba = require('./lib/isRgba')
var isHsl = require('./lib/isHsl')
var isHsla = require('./lib/isHsla')
var isHex = require('./lib/isHex')
var isKeyword = require('./lib/isKeyword')


module.exports = function isColor (str) {
  return isRgb(str) || isRgba(str) || isHsl(str) || isHsla(str) || isHex(str) || isKeyword(str)
}

module.exports.isRgb = isRgb
module.exports.isRgba = isRgba
module.exports.isHsl = isHsl
module.exports.isHsla = isHsla
module.exports.isHex = isHex
module.exports.isKeyword = isKeyword
