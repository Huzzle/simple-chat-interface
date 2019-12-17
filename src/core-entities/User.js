import { types } from 'mobx-state-tree'

export const User = types
  .model('User', {
    name: types.string
  })
