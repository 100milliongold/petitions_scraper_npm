import { PETION } from 'typings'
import petitions_scraper from './index'

describe('petitions_scraper', () => {
  var res: PETION | undefined = undefined
  it('청와대 갤러리에서 수집 및 파싱이 되는지 확인', async () => {
    try {
      res = await petitions_scraper(594884)
    } catch (error) {
      fail(error)
    }
  })

  it('결과가 undefined 인지 확인', () => {
    expect(res).not.toBeUndefined()
  })
  it('결과가 null 인지 확인', () => {
    expect(res).not.toBeNull()
  })

  test('begin 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.begin).not.toBeNull()
    expect(res?.begin).not.toBeUndefined()
    expect(res?.begin).not.toBeNaN()
  })
  test('end 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.end).not.toBeNull()
    expect(res?.end).not.toBeUndefined()
    expect(res?.end).not.toBeNaN()
  })
  test('category 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.category).not.toBeNull()
    expect(res?.category).not.toBeUndefined()
    expect(res?.category).not.toBeNaN()
  })
  test('content 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.content).not.toBeNull()
    expect(res?.content).not.toBeUndefined()
    expect(res?.content).not.toBeNaN()
  })
  test('crawled_at 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.crawled_at).not.toBeNull()
    expect(res?.crawled_at).not.toBeUndefined()
    expect(res?.crawled_at).not.toBeNaN()
  })
  test('num_agree 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.num_agree).not.toBeNull()
    expect(res?.num_agree).not.toBeUndefined()
    expect(res?.num_agree).not.toBeNaN()
  })
  test('status 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.status).not.toBeNull()
    expect(res?.status).not.toBeUndefined()
    expect(res?.status).not.toBeNaN()
  })
  test('title 이 null , undefined, NaN 이 안되야만 함', () => {
    expect(res?.title).not.toBeNull()
    expect(res?.title).not.toBeUndefined()
    expect(res?.title).not.toBeNaN()
  })
})
