import { types, getEnv } from 'mobx-state-tree'
import { uniqBy } from 'lodash-es'

import { Message } from '../core-entities/Message'

const pollingInterval = 2000

export const ChatStore = types
  .model('ChatStore', {
    messages: types.array(Message),
    lastFetchedTimestamp: types.number,
  })
  .actions(self => ({
    loadAllMessages() {
      getEnv(self).chatApi.fetchAllMessages().then(self.loadAllMessagesSuccess)
    },
    loadAllMessagesSuccess(messages) {
      if (messages.length > 0) {
        self.lastFetchedTimestamp = messages[messages.length - 1].timestamp
        self.messages = messages
      }
    },
    addMessage(author, message) {
      getEnv(self).chatApi.sendMessage(author, message).then(self.addMessageSuccess)
    },
    addMessageSuccess(message) {
      self.messages.push(message)
    },
    startPolling() {
      setInterval(() => {
        getEnv(self).chatApi.fetchNextMessages(self.lastFetchedTimestamp).then(self.fetchNextMessagesSuccess)
      }, pollingInterval)
    },
    fetchNextMessagesSuccess(messages) {
      if (messages.length > 0) {
        self.lastFetchedTimestamp = messages[messages.length - 1].timestamp
        self.messages = uniqBy(self.messages.concat(messages), 'id')
      }
    },
  }))

export const createChatStore = () => {
    return ChatStore.create({
      messages: [],
      lastFetchedTimestamp: 0,
    })
}
