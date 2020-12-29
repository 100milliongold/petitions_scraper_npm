const text = '비공개된 청원'

/**
 * 비공개 청원 여부 확인
 * @param $
 */
const is_closed_petition = ($: any): boolean => {
  try {
    const res = <string>(
      $('div[class=petitionsView_left] span[class=text]').eq(0).text()
    )
    return res.includes(text)
  } catch (error) {
    return false
  }
}

export default is_closed_petition
