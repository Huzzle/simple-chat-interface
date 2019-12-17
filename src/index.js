import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-css-reset'

import { ChatApi } from './api/chat'
import { RootStoreContext, RootStore } from './stores/RootStore'
import { createChatStore } from './stores/ChatStore'
import { Chat } from './components/Chat'

import './index.css'

const rootStore = RootStore.create({
  me: {
    name: process.env.REACT_APP_USER_NAME
  },
  chatStore: createChatStore()
}, {
  chatApi: new ChatApi(process.env.REACT_APP_API_URL, process.env.REACT_APP_TOKEN)
})

ReactDOM.render(
  <RootStoreContext.Provider value={rootStore}>
    <Chat />
  </RootStoreContext.Provider>,
  document.getElementById('root')
)
