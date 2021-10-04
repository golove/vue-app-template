// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from '../axios'


interface userInfo {
  id: string,
  name: string,
  avatar: string,
  gender: string,
  nationality: string,
  adress: string,
  telphone: string,
  identity: string,

}
// define your typings for the store state
export interface State {
  user: {
    token: string | null,
    username: string | null,
    roles: string[],
    avatar:string
  },
  inputValue: string,
  slideValue: number,
  personalCards: Array<userInfo>,
  collapseflag: boolean
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      roles: ['admin'],
      avatar:''
    },
    inputValue: '',
    personalCards: [],
    slideValue: 0,
    collapseflag: false
  },
  getters: {
    token: state => state.user.token,
    username: state => state.user.username,
    doneCards: state => {
      if (state.inputValue) {
        return state.personalCards.filter(
          el => el.name.indexOf(state.inputValue) > -1 || el.gender.indexOf(state.inputValue) > -1
            || el.nationality.indexOf(state.inputValue) > -1 || el.adress.indexOf(state.inputValue) > -1
            || el.telphone.indexOf(state.inputValue) > -1 || el.identity.indexOf(state.inputValue) > -1
        )
      } else {
        return state.personalCards.slice(0, state.slideValue)
      }
    }

  },
  mutations: {
    search(state, data: string) {
      state.inputValue = data
    },
    setSlideValue(state,data){
      state.slideValue = data
    },
    changeCollapse(state) {
      state.collapseflag = !state.collapseflag 
    },
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
    SAVE_PERSON: (state, data: Array<userInfo>) => {
      state.personalCards = data
    }
  },
  actions: {
    getPerson(context) {
      axios.getPerson({})
        .then((res: any) => {
          context.commit('SAVE_PERSON', res.data.result)
        })

    }
  }
})


// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}