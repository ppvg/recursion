var expect = require('chai').expect
var flatten = require('./flatten.js')

describe('flatten', function () {
  describe('with empty array', function () {
    it('should return empty array', function () {
      var output = flatten([])
      expect(output).to.eql([])
    })
  })

  describe('with simple value', function () {
    it('should return copy of array', function () {
      var input = ['iets']
      var output = flatten(input)
      expect(output).to.eql(input)
      expect(output).to.not.equal(input)
    })
  })

  describe('with nested values', function () {
    it('should flatten the array', function () {
      var input = ['iets', ['anders']]
      var output = flatten(input)
      expect(output).to.eql(['iets', 'anders'])
    })
  })
})
