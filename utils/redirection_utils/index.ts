const regx = /<.*?>|window.location.href=".*?|";/g
/**
 * window.location.href 안에 있는 url 추출 메서드
 * @param html
 */
export const get_redirection_url = (html: string) => {
  return html.replace(regx, '')
}

/**
 * 리다이렉션 url 인지 체크하는 메서드 대략 300 자 이하인 것만 추출
 * @param html
 */
export const check_redirection_url = (html: string) => {
  return html.length < 300 && regx.test(html)
}
