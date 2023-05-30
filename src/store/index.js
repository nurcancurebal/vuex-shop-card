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
    addToCard({ card }, product) {
      const itemIndex = card.findIndex(item => item.id === product.id)
      if (itemIndex === -1) {
        card.push(product);
      } else {
        card[itemIndex].count = parseInt(product.count) + parseInt(card[itemIndex].count)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
