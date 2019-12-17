import { createContext, useContext } from 'react'
import { types } from 'mobx-state-tree'

import { User } from '../core-entities'
import { ChatStore } from './ChatStore'

export const RootStore = types
  .model('RootStore', {
    me: types.maybe(User),
    chatStore: ChatStore, 
  })

export const RootStoreContext = createContext(null)

export const useStore = () => {
  const store = useContext(RootStoreContext)

  if (store === null) {
    throw new Error('useStore: Store cannot be null, add a context provider')
  }

  return store
}
