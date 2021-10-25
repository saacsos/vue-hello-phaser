import { createStore } from "vuex"

export default createStore({
  state: {
    score: 0,
    message: '',
  },
  getters: {
    getScore: state => state.score,
    message: state => state.message,
  },
  mutations: {
    setScore (state, score) {
      state.score = score
    },
    setMessage (state, message) {
      state.message = message
    }
  },
  actions: {},
  modules: {},
})
