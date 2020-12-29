import petitions_get_list from './index'
import { generator_array } from '../../utils'
import { PETION_LIST } from 'typings'

describe('petitions_scraper', () => {
  var start = 594878
  var end = 594884
  var res: PETION_LIST = []
  it('청와대 리스트 수집시 에러가 발생하는지 테스트', async () => {
    try {
      res = await petitions_get_list(start, end)
    } catch (error) {
      fail(error)
    }
  })
  it('길이가 동일한지 확인', async () => {
    var test = generator_array(start, end)
    expect(res.length).toEqual(test.length)
  })
})
