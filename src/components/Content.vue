<template>
	<button @click="back" class="back">返回主页</button>
	<div class="all">
	<div class="imgs">
		<ImageScroll ></ImageScroll>
		</div>
		<table class="heroTable">
			<tbody>
				<tr v-for="(item,index) in tvlist" :key="index">
						<td><img :src="item.Img" alt=""></td>
						<td>{{item.name}}</td>
					<td><router-link :to="'/hero/'+item.index">了解更多</router-link></td>
					<td>{{item.score}}</td>
				</tr>
				
			</tbody>
		</table>
		<div class="tianqi">
			<tianqi></tianqi>
		</div>
		</div>
</template>

<script>
import ImageScroll from '../components/ImageScroll.vue'
import tianqi from '../components/tianqi.vue'
import img1 from '@/assets/zy/zy1.webp'
import img2 from '@/assets/tv/tv2.webp'
import img3 from '@/assets/tv/tv3.webp'
import img4 from '@/assets/tv/tv4.webp'
import img5 from '@/assets/tv/tv1.webp'

	export default{
		name:"HeroHome",
		components:{
			ImageScroll,
			tianqi
		},
		data:function(){
			return{
				tvlist:[
					{
						index:1,
						name:'种地吧第二季',
						Img:img1,
						score:'豆瓣评分：9.9'
					},
					{
						index:2,
						name:'哈尔滨的一九四四',
						Img:img2,
						score:'豆瓣评分：8.8'
					},
					{
						index:3,
						name:'莲花楼',
						Img:img3,
						score:'豆瓣评分：9.7'
					},
					{
						index:4,
						name:'我的阿勒泰',
						Img:img4,
						score:'豆瓣评分：9.8'
					},
					{
						index:5,
						name:'狐妖小红娘月红篇',
						Img:img5,
						score:'豆瓣评分：9.5'
					}
				]
			}
	},
	methods:{
		back(){
			this.$router.replace('/home');
		}
	}
	}
</script>

<style scoped>
	.all{
		margin-top: 50px;
		position: inherit;
	}
	.imgs{
		margin-top: 15px;
	}
	.tianqi{
		padding-top: 430px;
		color: white;
	}
	.heroTable{
		text-align: center;
		position: absolute;
		top: 540px;
		left: 240px;
		font-size: 17px;
	}
	a{
		text-decoration: none;
		color: white;
		background-color: limegreen;
		border-radius: 10px;
		width: 90px;
		margin-left: 85px;
	}
	.heroTable td {
		display: flex;
		flex-direction: column;
	}
	.heroTable tbody{
		display: flex;
		color: white;
	}
	.heroTable tr:hover{
		transform: scale(1.07);
	}
	.heroTable img{
		padding-left: 10px;
		width: 250px;
		height: auto;
	}
	.back{
			margin-top: 5px;
			margin-left: 25px;
			width: 100px;
			height: 35px;
			color: white;
			background:limegreen ;
			border-radius: 20px;
		}
		.back:hover{
			transform: scale(1.10);
		}
	
</style>