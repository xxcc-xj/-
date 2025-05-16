import shop from '../../api/shop'

const goodsModul = {
	 namespaced: true,
	state: {
		goodslist: []
	},
	getters: {
		
	},
	mutations:{
		setList (state, data) {
		    state.goodslist = data
		  }
	},
	actions: {
	  getList(context){
	    shop.getGoodsList(data => {
	          context.commit('setList', data)
	    })
	  }
	},
}

export default goodsModul
