import { Module } from 'vuex'
import { Skill } from '@/models/domain'

interface State {
  userSkills: Skill[]
}

const mainModule: Module<State, State> = {
  // #region State
  state: () => ({
    userSkills: [],
  }),
  getters: {},
  mutations: {
    ADD_SKILL(state, skill: Skill): void {
      state.userSkills.push(skill)
    },
  },
  actions: {},
}

export default mainModule
