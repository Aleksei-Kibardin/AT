import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        user: {
            name: null,
            age: null
        },
        chaild: [],
      }
    },
  })

export default store;