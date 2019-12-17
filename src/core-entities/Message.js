import { types } from 'mobx-state-tree'

export const Message = types
  .model('Message', {
    id: types.identifier,
    author: types.string,
    text: types.string,
    timestamp: types.number,
  })
