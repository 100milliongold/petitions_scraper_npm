import { INDEX } from '../../../typings'
import { check_redirection_url, get_redirection_url } from '../../../utils'
import axios from 'axios'

/**
 * 청와대 홈페이지 접속 설정
 * @param index
 */
const getConfig = (index: INDEX) => ({
  headers: {
    referer: `https://www1.president.go.kr/petitions/${index}`,
    'user-agent': `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36`,
  },
})

const getUrl = (index: INDEX) =>
  `https://www1.president.go.kr/petitions/${index}`

/**
 * 게시판의 글을 추출한다.
 * @param index
 */
const getHtml = async (index: INDEX) => {
  // https://github.com/lovit/petitions_scraper/blob/810f15f34b20fee30778ddc5e14a2d9ef4fb952b/petitions_scraper/parser.py#L8
  try {
    const res = await axios.get(getUrl(index), getConfig(index))

    /**
     * 만약 리다이렉션 화면이 나올경우
     */
    if (check_redirection_url(res.data)) {
      /**
       * 리다이렉션 주소를 추출하여
       */
      const new_url = get_redirection_url(res.data)
      /**
       * 다시 접속을 시도한다.
       */
      return await axios.get(`${new_url}`, getConfig(index))
    } else {
      return res
    }
  } catch (error) {
    throw error
  }
}

export default getHtml
