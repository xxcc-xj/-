import { createStore } from 'vuex'
import goodsModul from './modules/goods.js'
import shopcartModul from './modules/shopcart.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  goods:goodsModul,
	  shopcart:shopcartModul
  }
})
