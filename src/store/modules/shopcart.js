const shopcartModul = {
	namespaced:true,
	state:{
		items:[],
		checkAll:false 
	},
	//同步提交
	mutations:{
		insert:function(state,item){
			const v = state.items.find(v=>v.id === item.id);
			if(v){
				v.count;
			}else{
				state.items.push({
					id:item.id,
					img:item.img,
					name:item.name,
					count:1,
					check:true,
				});
			}
		},
		del:function(state,id){
			state.items.forEach((item,index,arr)=>{
				if(item.id===id){
					arr.splice(index,1);
				}
			})
		},
		  changeCheckedAll(state, bol){
		    state.checkAll = bol
		  },
	},
	//异步提交
	actions:{
		insert(context,item){
			context.commit('insert',item);
		},
		del(context,id){
			context.commit('del',id);
		}
	}
}


export default shopcartModul
	