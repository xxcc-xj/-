<template>
	<div class="backa">
	<button @click="back" class="back">返回主页</button>
	<button @click="seelist" class="seelist">我的追剧列表</button>
	</div>
	<div class="list">
		<div class="item" v-for="goods in goodslist" :key="goods.id">
			<div class="item-l">
				<img class="item-img" :src="goods.img">
				<video :src="goods.V" class="video-js" controls></video>
			</div>
			<div class="item-r">
				<div class="item-title">{{goods.name }}</div>
				<div class="item-desc">{{goods.desc}}</div>
				<div class="item-opt">
					<button @click="insert(goods)" >追剧+</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
	export default {
		data: function() {
			return {
				// isactive:true,
			}
		},
		computed: {
			goodslist: function() {
				return this.$store.state.goods.goodslist
			},
		},
		methods: {
			insert:function(goods){
				this.$store.dispatch('shopcart/insert',goods);
			},
			seelist(){
				this.$router.replace('/shopcart')
			},
			back(){
				this.$router.replace('/home')
			}
		},
	created() {
			this.$store.dispatch('goods/getList')
		},
	}
</script>

<style scoped>
	.item {
		border-bottom: 1px dashed #ccc;
		padding-left: 100px;
		padding-top: 20px;
		width: 1200px;
		
	}
	.item::after {
		content: "";
		display: block;
		clear: both;
	}
.list{
	margin-top: -100px;
	margin-left: 100px;
}
	.item-l {
		float: left;
		font-size: 0;
	}
	.video-js{
		padding-left: 50px;
		width: 800px;
		height: auto;
	}

	.item-r {
		float: left;
		/* padding-left: 20px; */
	}

	.item-img {
		width: 250px;
		height: auto;
		border: 1px solid #ccc;
		
	}

	.item-title {
		font-size: 25px;
		margin-top: 15px;
		padding-left: 35px;
		color: white;
		
	}
	.item-desc {
		font-size: 20px;
		color:#888;
		margin-top: 10px;
	}
	.item-opt {
		margin-top: 10px;
		margin-bottom: 15px;
	}
.item-opt button:hover{
	transform: scale(1.10);
}
	.item-opt button {
		border: 0;
		background: limegreen;
		color: #fff;
		font-size: 17px;
		margin-top: 5px;
		margin-left: -5px;
		padding: 5px 5px;
		cursor: pointer;
		border-radius: 20px;
		width: 100px;
	}
	
	.seelist{
		margin-top: 10px;
		margin-left: 10px;
		background:limegreen ;
		width: 120px;
		height: 35px;
		color: white;
		border-radius: 20px;
	}
	.back{
		margin-left: 10px;
		width: 120px;
		height: 35px;
		color: white;
		background:limegreen ;
		border-radius: 20px;
	}
	.back:hover{
		transform: scale(1.10);
	}
	.seelist:hover{
		transform: scale(1.10);
	}
	.backa{
		width: 60px;
	}
</style>
