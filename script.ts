#!/usr/bin/env node
import { INDEX, PETION, PETITION_IDX_LIST } from 'typings'
import { petitions_scraper, generator_array } from './utils'

import stringify from 'csv-stringify'
import fs from 'fs'

import _ from 'lodash'
import { encode } from 'iconv-lite'

var clc = require('cli-color')

/**
 * yargs 설정
 */
var argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: node_petitions_scraper [options]')
  .example(
    'node_petitions_scraper -s 594878 -e 594884 -o result.csv',
    ': 594878 ~ 594884 까지 데이터를 수집합니다.'
  )
  .alias('s', 'start')
  .alias('e', 'end')
  .alias('o', 'output')
  .alias('c', 'encoding')
  .nargs('s', 1)
  .nargs('e', 1)
  .nargs('o', 1)
  .describe('s', '시작번호')
  .describe('e', '끝 번호')
  .describe('o', '저장 파일명')
  .describe('c', '인코딩')
  .demandOption(['s', 'e', 'o'])
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2020').argv

/**
 * 시작 번호
 */
var start: INDEX = argv.start
/**
 * 끝 번호
 */
var end: INDEX = argv.end

var ec = argv.encoding
/**
 * 저장 파일 위치
 */
var output: string = argv.output

output = output.replace('.csv', '').replace('.CSV', '')

const list: PETITION_IDX_LIST = generator_array(start, end)

console.log(`${list.length} 개의 청와대 데이터 수집 시작`)

const scraper_list = list.map(
  (idx: INDEX): Promise<PETION | undefined> => {
    // console.log(`${idx} 번글 수집 시작!`)
    return new Promise((resolve, reject) => {
      petitions_scraper(idx)
        .then((res) => {
          console.log(clc.green('[SUCCESS] ') + `${idx} 번글 수집 성공!`)
          resolve(res)
        })
        .catch((e) => {
          console.log(clc.red('[FAIL] ') + `${idx} 번글 수집 실패!`)
          reject(e)
        })
    })
  }
)

let columns = {
  title: 'title',
  category: 'category',
  begin: 'begin',
  end: 'end',
  crawled_at: 'crawled_at',
  status: 'status',
  num_agree: 'num_agree',
  petition_idx: 'petition_idx',
  content: 'content',
}

const dateFormat = require('dateformat')

/**
 * 수집 완료
 */
Promise.all(scraper_list).then((result) => {
  const data = _(result)
    .map(
      ({
        title,
        category,
        begin,
        end,
        crawled_at,
        status,
        num_agree,
        petition_idx,
        content,
      }: PETION) => [
        title,
        category,
        dateFormat(begin, 'yyyy-mm-dd 00:00:00'),
        dateFormat(end, 'yyyy-mm-dd 00:00:00'),
        dateFormat(crawled_at, 'yyyy-mm-dd HH:MM:ss'),
        status,
        num_agree,
        petition_idx,
        content,
      ]
    )
    .value()

  // console.log(data, columns)

  let iconv = require('iconv-lite')

  stringify(data, { header: true, columns: columns }, (err, text) => {
    if (err) throw err
    // console.log(text)

    if (ec) {
      text = iconv.encode(text, 'euc-kr')
    }
    fs.writeFile(`${output}.csv`, text, (err) => {
      if (err) throw err
      console.log(`${output}.csv 저장완료.`)
    })
  })
})
