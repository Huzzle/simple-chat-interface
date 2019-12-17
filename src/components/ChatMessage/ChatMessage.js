import React from 'react'
import cx from 'classnames'
import dayjs from 'dayjs'

import './ChatMessage.css'

export const ChatMessage = ({ currentUserName, author, text, timestamp }) => {
  const classes = cx('ChatMessage', {
    'ChatMessage--mine': author === currentUserName
  })

  return (
    <div className={classes}>
      {author !== currentUserName && <div className='ChatMessage__Author'>{author}</div>}
      <div className='ChatMessage__Text'>{text}</div>
      <div className='ChatMessage__DateTime'>{dayjs(timestamp).format('DD MMM YYYY HH:ss')}</div>
    </div>
  )
}
