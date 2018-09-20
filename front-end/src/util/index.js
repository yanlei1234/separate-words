import store from '../state/store'
import axios from 'axios'

export function formatWithoutProperty (data) {
  let str = '', res = ''
  data.forEach(item => {
    str += item.content
  })
  str.split('|').forEach(item => {
    if (item.length == 1) res += item + "S"
    if (item.length > 1) {
      res += item[0] + "B"
      for (let i = 0; i < item.length-2; i++) {
        res += item[i+1] + "I"
      }
      res += item[item.length-1] + "E"
    }
  })
  return res
}

export function unformatWithoutProperty (formatedStr, firstFormat) {
  if (firstFormat) {
    let tempStr = ''
    for (let i = 0;i <formatedStr.length;i++) {
      tempStr += formatedStr[i] + 'S'
    }
    formatedStr = tempStr
  }
  let start, end, count = 0, content = '', format = ''
  for (let i = 0;i <formatedStr.length;i++) {
    if (i % 2 == 0) {
      content += formatedStr[i]
    } else {
      format += formatedStr[i]
    }
  }
  let arr = format.split('').map((item, index) => {
    return { id: index, content: content[index] }
  })
  for (let i = 0; i < arr.length; i++) {
    if (format[i] == 'S') arr.splice(i + count + 1, 0, { id: i + arr.length + count++, content: '|' })
    if (format[i] == 'B') start = i + count
    if (format[i] == 'E') {
      end = i + count
      arr.splice(end+1, 0, { id: i + arr.length + count++, content: '|' })
    }
  }
  return arr
}

export function formatWithProperty (data) {
  let res = ''
  data.map(item => {
    let type = item.type || ''
    res += item.content + '/' + type + ' '
  })
  return res.substr(0, res.length-1)
} 

export function unformatWithProperty (formatedStr, firstFormat) {
  if (firstFormat) {
    let tempStr = ''
    for (let i = 0;i <formatedStr.length;i++) {
      tempStr += formatedStr[i] + '/ '
    }
    formatedStr = tempStr
  }
  let arr = formatedStr.split(' ')
  let res = arr.map((item, index) => {
    let data = item.split('/')
    return {
      id: index,
      content: data[0],
      type: data[1]
    }
  })
  return res  
}