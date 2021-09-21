// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'




// define your typings for the store state
export interface State {
  user: {
    token: string | null,
    username: string | null
  },

}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username')
    },

  },
  getters: {
    token: state => state.user.token,
    username: state => state.user.username,
   
  },
  mutations: {

    BIND_LOGIN: (state, data: string) => {
      localStorage.setItem('token', data)
      state.user.token = data
    },
    BIND_LOGOUT: (state) => {
      localStorage.removeItem('token')
      state.user.token = null
    },
    SAVE_USER: (state, data) => {
      localStorage.setItem('username', data)
      state.user.username = data
    },
  },
  actions: {
  
  }
})


// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}