import { get_redirection_url, check_redirection_url } from './index'

var sample = `<HTML><HEAD><script>window.location.href="https://www1.president.go.kr/petitions/594884?wscckey=0b42fe0c962371be_1609259362";</script></HEAD><BODY>`
var answer =
  'https://www1.president.go.kr/petitions/594884?wscckey=0b42fe0c962371be_1609259362'

describe('check_redirection_url', () => {
  it('리다이렉션 인지 체크 1 -> <HTML><HEAD><script>window.location.href 이 있으면 true', () => {
    const res = check_redirection_url(sample)
    expect(res).toEqual(true)
  })
  it('리다이렉션 인지 체크 2 ->  <HTML><HEAD><script>window.location.href 이 없으면 false', () => {
    const res = check_redirection_url(answer)
    expect(res).toEqual(false)
  })
})

describe('get_redirection_url', () => {
  it('url 추출 테스트', () => {
    const res = get_redirection_url(sample)
    expect(res).toEqual(answer)
  })
})
