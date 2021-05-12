import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import user from './modules/user'
import { IUserState } from './modules/user/state'
import getters from './getters'
export interface IStore {
  user: IUserState
}

// export const key: InjectionKey<Store<IStore>> = Symbol()

const store = createStore<IStore>({
  modules: {
    user
  },
  getters
})

export function useStore() {
  return baseUseStore<IStore>()
}

export default store