import parse_meta from './parse_meta'
import parse_content from './parse_content'
import parse_title from './parse_title'
import parse_number_of_agree from './parse_number_of_agree'
import parse_status from './parse_status'
import check_closed_petition from './is_closed_petition'

import { HTML, PETION } from '../../../typings'

const cheerio = require('cheerio')

/**
 * 가져온 html 데이터를 파싱해서 json 으로 변환한다.
 * @param html
 */
const parser = (html: HTML): PETION | undefined => {
  const $ = cheerio.load(html)

  const is_closed_petition = check_closed_petition($)

  const { category, begin, end } = parse_meta($)

  const title = parse_title($)
  const content = parse_content($)
  const num_agree = parse_number_of_agree($)
  const status = parse_status($)

  const crawled_at = new Date()

  if (!is_closed_petition) {
    return {
      begin,
      category,
      content,
      crawled_at,
      end,
      num_agree,
      status,
      title,
      petition_idx: undefined,
    }
  } else {
    return undefined
  }
}

export default parser
