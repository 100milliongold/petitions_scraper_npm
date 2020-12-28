import { INDEX, PETION_LIST, PETION, PETITION_IDX_LIST } from './typings'
import { petitions_get_list } from './utils'

/**
 * 청와대 글 추출 함수
 * @param start
 * @param end
 */
export function petition_analyzer(
  start: INDEX,
  end: INDEX
): Promise<PETION_LIST> {
  return petitions_get_list(start, end)
}

export default petition_analyzer
