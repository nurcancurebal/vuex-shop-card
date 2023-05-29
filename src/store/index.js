import Vue from 'vue'
import Vuex from 'vuex'
import { productList } from '@/assets/productData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    card: [],
    products: productList,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
