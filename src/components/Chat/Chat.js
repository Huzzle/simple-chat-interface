import React, { useState } from 'react'

import { TextField } from '../../ui-kit/TextField'
import { Button } from '../../ui-kit/Button'

import './Chat.css'

export const Chat = () => { 
  const [ message, setMessage ] = useState('')

  return (
    <div className="Chat">
      <div className="Chat__Messages">
        Messages List
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
          <Button onClick={() => {}} disabled={message === ''}>Send</Button>
        </div>
      </div>
    </div>
  )
}
