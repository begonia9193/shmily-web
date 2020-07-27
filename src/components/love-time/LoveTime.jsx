import React, { useState } from 'react'
import moment from 'moment'
import Style from './index.less'

const getTime = () => {
  let start = moment('2018-07-25 17:20:14')
  const timeCalc = (dateStr) => {
    const result = moment().diff(start, dateStr)
    start = start.add(result, dateStr)
    return result
  }
  const day = timeCalc('days')
  const hour = timeCalc('hours')
  const minutes = timeCalc('minutes')
  const seconds = timeCalc('seconds')
  return {
    day,
    hour,
    minutes,
    seconds,
  }
}

export default () => {
  const [times, setTimes] = useState(getTime())
  setInterval(() => {
    setTimes(getTime())
  }, 1000)
  return (
    <p className={Style.wrap}>
      第<strong>{times.day}</strong>天<strong>{times.hour}</strong>小时
      <strong>{times.minutes}</strong>分钟
      <strong>{times.seconds}</strong>秒
    </p>
  )
}
