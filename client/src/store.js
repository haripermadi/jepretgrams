import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    photos: []
  },
  getters: {
    getPhotos: function (state) {
      return state.photos
    }
  },
  mutations: {
    getPhotos: function (state, payload) {
      state.photos = payload
    }
  },
  actions: {
    getPhotos: function (contex, payload) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/photo'
      }).then(function (response) {
        console.log(response)
        contex.commit('getPhotos', response)
      })
    }
  }
})

export default store
