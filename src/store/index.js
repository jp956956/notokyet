import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    },
    what: {
      day: '',
      place: '',
      home: '',
      away: '',
      record: []     
    },
    cart: []
  },
  mutations: {
    logout (state) {
      state.user.name = '',
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    sendTeam (state, data) {
      state.what.day = data.day
      state.what.place = data.place
      state.what.home = data.home
      state.what.away = data.away
      state.what.record = data.record
    },
    onSubmit (state, data) {
      state.what = data
    },
    changeState (state, data) {
      state.what.record[0].content[0].pitcher = data
    },
    addToCart (state, data) {
      state.cart = data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [Persistedstate()]
})
