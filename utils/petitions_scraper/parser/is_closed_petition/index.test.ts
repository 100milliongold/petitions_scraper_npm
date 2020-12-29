import is_closed_petition from './index'
import sample from './sample'

const cheerio = require('cheerio')

describe('is_closed_petition', () => {
  it('is_closed_petition 동작테스트', () => {
    const $ = cheerio.load(sample)
    expect(is_closed_petition($)).toEqual(true)
  })
})
