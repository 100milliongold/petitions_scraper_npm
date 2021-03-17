import petitions from './index'
describe('petitions', () => {
  const start = 594871
  const end = 594877
  
  test('리스트 생성이 되는지 확인', async () => {
    const result = await petitions.scraper_list(start, end)
    expect(result.length).toBeTruthy();
  })


  test('수집이 되는지 확인', async () => {
    const result = await petitions.scraper(start)
    expect(result).toBeTruthy()
  })
  
})
