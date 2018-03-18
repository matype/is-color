const test = require('tape')
const color = require('..')

test('isRgb', function (t) {
  const str = 'rgb(255, 0, 0)'
  t.same(color.isRgb(str), true)
  t.end()
})

test('isRgba', function (t) {
  const str = 'rgba(255, 0, 0, .5)'
  t.same(color.isRgba(str), true)
  t.end()
})

test('isHsl', function (t) {
  const str = 'hsl(123, 45%, 67%)'
  t.same(color.isHsl(str), true)
  t.end()
})

test('isHsla', function (t) {
  const str = 'hsla(123, 45%, 67%, 0.9)'
  t.same(color.isHsla(str), true)
  t.end()
})

test('isHex', function (t) {
  const str = '#123456'
  t.same(color.isHex(str), true)
  t.end()
})

test('isHex with alpha channel', function (t) {
  const str = '#0000ffcc'
  t.same(color.isHex(str), true)
  t.end()
})

test('isKeyword', function (t) {
  const str = 'tomato'
  t.same(color.isKeyword(str), true)
  t.end()
})

test('isColor', function (t) {
  const str = 'tomato'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  const str = 'currentColor'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  const str = 'currentColor'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  const str = 'inherit'
  t.equal(color(str), true)
  t.end()
})

test('isColor', function (t) {
  const str = 'transparent'
  t.equal(color(str), true)
  t.end()
})
