<template>
	<div class="main">
				<div class="content left">
					<ul>
						<li><router-link to="/Content">推荐</router-link></li>
						<li><router-link to="/goodslist">电视剧</router-link></li>
						<li><router-link to="/zongylist">综艺</router-link></li>
						<li><router-link to="/filmslist">电影</router-link></li>
						<li><router-link to="/dmlist">动漫</router-link></li>
					</ul>
				</div>
				<div class="image">
					<ImageScroll></ImageScroll>
				</div>
				<div class="list">
					<GoodsList></GoodsList>
				</div>
			</div>
</template>

<script>
	import ImageScroll from '../components/ImageScroll.vue'
	import GoodsList from '../components/GoodsList.vue'
	export default{
		name:"HeroHome",
		components:{
			ImageScroll,
			GoodsList
		},
		}
</script>

<style scoped>
	.main{
		display: flex;
		top: 50px;
		bottom: 40px;
		width: 100%;
	}
	.content{
		flex: 1;
		text-align: center;
		height: 100%;
	}
	.left{
		flex: 0 0 10%;
		background-color: #505050;
		border-radius: 20px;
	}
	.left a{
		text-decoration: none;
		color: white;
	}
	.right{
			margin: 10px;
			color: #b0b0b0;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	
	}
	ul li{
		margin-top: 10px;
		height: 40px;
		line-height: 40px;
		color: #b0b0b0;
		cursor:pointer;
		border-bottom:1px solid ;
	}
	.right ul li:hover{
		transform: scale(1.10);
	}
	.p{
		padding-left: 150px;
		padding-top:100px;
		font-size: 40px;
		color:white;
	}
	.image{
		margin-left: -20px ;
	}
	.list{
		padding-top: 480px;
		padding-left: 60px;
	}
</style>