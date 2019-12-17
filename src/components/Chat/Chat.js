import React, { useEffect, useState, useRef } from 'react'
import { observer } from 'mobx-react'

import { useStore } from '../../stores/RootStore'
import { ChatMessage } from '../ChatMessage'
import { TextField } from '../../ui-kit/TextField'
import { Button } from '../../ui-kit/Button'

import './Chat.css'

export const Chat = observer(() => {
  const { chatStore, me } = useStore()
  const chatRef = useRef(null)
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    chatStore.loadAllMessages()
    chatStore.startPolling()
  }, [chatStore])

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [chatStore.messages.length])

  function addMessage() {
    chatStore.addMessage(me.name, message)
    setMessage('')
  }

  function renderMessages() {
    return chatStore.messages
      .map(({ id, author, text, timestamp }) => (
        <ChatMessage
          key={id}
          author={author}
          text={text}
          timestamp={timestamp}
          currentUserName={me.name}
        />
      ))
  }

  return (
    <div className="Chat">
      <div className="Chat__Messages" ref={chatRef}>
        {renderMessages()}
      </div>
      <div className="Chat__Footer">
        <div className="Chat__MessageInput">
          <TextField
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="Chat__SendButton">
          <Button onClick={addMessage} disabled={message === ''}>Send</Button>
        </div>
      </div>
    </div>
  )
})
