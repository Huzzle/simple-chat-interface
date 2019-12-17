import React from 'react'
import dayjs from 'dayjs'

import './ChatMessage.css'

export const ChatMessage = ({ author, text, timestamp }) => {
  return (
    <div className='ChatMessage'>
      <div className='ChatMessage__Author'>{author}</div>
      <div className='ChatMessage__Text'>{text}</div>
      <div className='ChatMessage__DateTime'>{dayjs(timestamp).format('DD MMM YYYY HH:ss')}</div>
    </div>
  )
}
