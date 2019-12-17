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
  }))

export const createChatStore = () => {
    return ChatStore.create({
      messages: [],
    })
}
