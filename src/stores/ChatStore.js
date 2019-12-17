import { types, getEnv } from 'mobx-state-tree'

import { Message } from '../core-entities/Message'

export const ChatStore = types
  .model('ChatStore', {
    messages: types.array(Message),
  })
  .actions(self => ({
    loadAllMessages() {
      getEnv(self).chatApi.fetchAllMessages().then(self.loadAllMessagesSuccess)
    },
    loadAllMessagesSuccess(messages) {
      self.messages = messages
    },
    addMessage(author, message) {
      getEnv(self).chatApi.sendMessage(author, message).then(self.addMessageSuccess)
    },
    addMessageSuccess(message) {
      self.messages.push(message)
    },
  }))

export const createChatStore = () => {
    return ChatStore.create({
      messages: [],
    })
}
