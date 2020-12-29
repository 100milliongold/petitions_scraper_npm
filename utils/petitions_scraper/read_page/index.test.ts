import getHtml from './index'

import { check_redirection_url } from '../../../utils'

describe('getHtml', () => {
  test('청와대 갤러리에서 글이 수집이 되는지 테스트 : redirection 이 나오면 안됨', async () => {
    try {
      const res = await getHtml(594884)
      expect(res.data).not.toBeNull()
      expect(check_redirection_url(res.data)).toEqual(false)
    } catch (error) {
      fail(error)
    }
    // console.log(res)
  })
})
