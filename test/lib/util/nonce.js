/* eslint-env mocha */
'use strict'

const assert = require('assert')

const { nonce } = require('../../../lib/util')

describe('nonce', () => {
  it('is non-zero and a number', () => {
    assert(!isNaN(nonce()) && nonce() > 0)
  })

  it('is strictly increasing', () => {
    assert(nonce() < nonce())
  })

  it('is large enough', () => {
    assert(nonce() > 1000000000000)
  })
})
