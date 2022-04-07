import { Module } from 'vuex'
import { User } from '@/models/domain'

interface State {
  user: User
}

const mainModule: Module<State, State> = {
  // #region State
  state: () => ({
    user: { id: 1, skills: [] },
  }),
  getters: {},
  mutations: {
    SET_USER(state, user: User): void {
      state.user = user
    },
  },
  actions: {},
}

export default mainModule
