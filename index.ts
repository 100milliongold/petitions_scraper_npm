import { INDEX, PETION_LIST, PETION, PETITION_IDX_LIST } from './typings'
import { petitions_get_list , petitions_scraper} from './utils'

/**
 * 청와대 글 추출 함수
 * @param start
 * @param end
 */
export function scraper_list(
  start: INDEX,
  end: INDEX
): Promise<PETION_LIST> {
  return petitions_get_list(start, end)
}

/**
 * 청와대 글 추출 함수
 * @param index 글 번호 
 * @returns 
 */
export function scraper(index:number) {
  return petitions_scraper(index)
}

export default {
  scraper_list,
  scraper
}
