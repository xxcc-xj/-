<template>
	<div>
		<button @click="back" class="back">返回</button>
		<span v-for="item in tvlist" :key="item.index">
			<span v-if="item.index == $route.params.heroid">
				<div><img :src="item.Img" alt=""></div>
				<p class="name">{{item.name}}</p>
				<p class="score">{{item.score}}</p>
				<p class="xiangqing">{{item.xiangqing}}</p>
				<button @click="goto(item.index)" class="goto">立即观看</button><br>
				<video :src="item.V" controls class="video"></video>
			</span>
		</span>
	</div>
</template>

<script>
	import img1 from '@/assets/zy/zy1.webp'
	import img2 from '@/assets/tv/tv2.webp'
	import img3 from '@/assets/tv/tv3.webp'
	import img4 from '@/assets/tv/tv4.webp'
	import img5 from '@/assets/tv/tv1.webp'
	import zy1 from '@/assets/video/zy1.mp4'
	import v1 from '@/assets/video/tv2.mp4'
	import v3 from '@/assets/video/tv3.mp4'
	import v4 from '@/assets/video/tv1.mp4'
	import v5 from '@/assets/video/tv5.mp4'
	export default{
		name:"Contentlnfo",
		data:function(){
			return{
				
				tvlist:[
					{
						index:1,
						Img:img1,
						name:'种地吧第二季',
						xiangqing:'这是一个关于汗水、泥士和成长的青春实验故事。10位青春阳光的少年踏实地用180天时间在100亩土地上播种、溉、施肥、收获，真实运营农场。少年们随着麦子一同成长，最终见证一粒种子变成麦田，看到废弃荒野变成田园诗歌。《种地吧》第二季，农田种植面积扩大，10位少年将解锁全新农业种植领域，提升个人劳动技能，以企业做大做强展现“科技助农，产业兴农”，以脚踏实地的劳动书写当代吉年的成长诗歌!',
						score:'豆瓣评分：9.9',
						V:zy1
					},
					{
						index:2,
						Img:img2,
						name:'哈尔滨的一九四四',
						xiangqing:'1944年伪满统治下的哈尔滨，伪装成铁路巡的地下党宋卓文，被特务科科长关雪误认为自己的救命恩人--其实是卓文失散多年的双胞胎哥哥宋卓武。卓文为查清关东军课长浅野大吾来哈尔滨的最高任务，将计就计利用关雪进入特务科，可是宋卓武却突然出现，使卓文陷入始料未及的困境。关雪冷血多疑，心狠毒辣，卓武生性冲动，经常无意间破坏卓文的行动，在上级的安排下，才使得两兄弟相互配合，彼此掩护，经历数次的试探，避开特务科内部同事的明争暗斗，终于取得关雪和日方高官的信任。在这短短一年的时间之内，地下党人们经历千辛万苦查清并阻止了日军和苏联共谋的秘密行动，揪出潜伏在我党内部的伪满特务，迎来战争最后的胜利。',
						score:'豆瓣评分：8.8',
						V:v1
					},
					{
						index:3,
						Img:img3,
						name:'莲花楼',
						xiangqing:'该剧讲述了闻名武林的四顾门门主李相夷在一次大战后身受重伤，从此退隐江湖成为淡泊名利的“假神医”李莲花，在遇到新交方多病与旧敌笛飞声后重新卷入江湖的故事。江湖暗流涌动，疑团扑朔迷离，抽丝剥茧方能断出真相，段荡气回肠的侠义情即将热血展开。',
						score:'豆瓣评分：9.7',
						V:v3
					},
					{
						index:4,
						Img:img4,
						name:'我的阿勒泰',
						xiangqing:'生长在阿勒泰的汉族少女李文秀一心在大城市中追求文学梦想，却屡屡碰壁被迫回到老家与开小卖部的母亲相依为命。在结识哈萨克少年巴太之后，文秀渐渐发现了当地之美。',
						score:'豆瓣评分：9.8',
						V:v4
					},
					{
						index:5,
						Img:img5,
						name:'狐妖小红娘月红篇',
						xiangqing:'《讲述了人与妖冲突不断的世界中,涂山狐族心怀大义的大当家涂山红红(杨幂 饰)一心冀望两方的平等和和平，为此，她携手人族乐方家族遗孤东方月初(龚俊 饰)，开启促成缔结人和妖之间的情缘任务，以此抵抗侵蚀庇护涂山上下的苦情树的暗黑力量，瓦解挑拨人和妖之间矛盾的暗黑势力。',
						score:'豆瓣评分：9.5',
						V:v5
					}
				]
			}
		},
		methods:{
			back(){
				this.$router.replace('/content')
			},
			goto(index){
				if(index==1){
					window.open('https://www.iqiyi.com/v_109ugar85r8.html?ht=0&ischarge=false&tvname=%E7%A7%8D%E5%9C%B0%E5%90%A72%E7%AC%AC35%E6%9C%9F%20%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%97%A9%E4%BA%94%E6%94%B6%E9%B1%BC%20%E8%B5%B5%E4%B8%80%E5%8D%9A%E6%90%AD%E5%BB%BA%E5%90%8E%E9%99%A1%E9%97%A8%E7%89%A9%E8%81%94%E7%BD%91&vid=cc3a5c7a7015285de6aa0ca7bce7c0a6&vtype=0&f_block=source_selector_bk')
				}else if(index==2){
					window.open('https://www.iqiyi.com/v_1f7yemmnf3k.html?s3=pca_115_number_enlarge&s4=0&vfrmblk=pca_115_number_enlarge&vfrm=3&s2=3&vfrmrst=0')
				}else if(index==3){
					window.open('https://www.iqiyi.com/v_25ltrdm1rl8.html?s3=pca_115_number_enlarge&s4=0&vfrmblk=pca_115_number_enlarge&vfrm=3&s2=3&vfrmrst=0')
				}
				else if(index==4){
					window.open('https://www.iqiyi.com/v_al19ckpf80.html?ht=0&ischarge=false&tvname=%E6%88%91%E7%9A%84%E9%98%BF%E5%8B%92%E6%B3%B0%E7%AC%AC1%E9%9B%86&vid=c2aff3ab4bf2262659b38e620951786c&vtype=0&f_block=selector_bk&s2=wna_tvg_1st&s3=wna_tvg_drama_select_head&s4=1&pb2=bkt=&c1=&e=&fatherid=&position=&r_area=&r_source=&recext=&sc1=&sqpid=&stype=&ab=8342_B,8401_A,8004_B,5257_B,8432_B,8497_B,8542_B,8665_D,6578_B,6312_B,6091_B,8690_B,8737_D,8739_B,8742_A,8760_B,8808_A,8812_C,8873_A,8883_B,6082_B,5335_B,5465_B,6843_B,6832_C,7074_C,7682_C,5924_D,6151_C,5468_B,7024_C,5592_B,6031_B,6629_B,5670_B,6050_B,6237_B,6249_C,7996_B,6704_C,6752_C,7332_B,7381_B,7423_C,7581_B')
				}else if(index==5){
					window.open('https://www.iqiyi.com/v_1kbk2rm8yw0.html?s3=pca_115_number_enlarge&s4=0&vfrmblk=pca_115_number_enlarge&vfrm=3&s2=3&vfrmrst=0')
				}
			}
		}
	}
</script>

<style scoped>
	p{
		margin:20px;
		width: 650px;
		padding-left: 600px;
		text-align: justify;
		color: white;
	}
	.name{
		margin-top: -350px;
		font-size: 30px;
	}
	.score{
		color: #999
	}
	.xiangqing{
		color: #999;
	}
	img{
		width: 350px;
		height: auto;
		padding-top: 100px;
		padding-left: 200px;
	}
	.back{
		margin-top: 10px;
		margin-left: 25px;
		width: 120px;
		height: 35px;
		color: white;
		border-radius: 20px;
		background:limegreen ;
	}
	.goto{
		width: 120px;
		height: 40px;
		color: white;
		font-size: 17px;
		border-radius: 20px;
		background:limegreen ;
		margin-left: 620px;
	}
	.goto:hover{
		transform: scale(1.10);
	}
	.back:hover{
		transform: scale(1.10);
	}
	.video{
		width: 1070px;
		height: auto;
		padding-left: 200px;
		padding-top: 150px;
	}
	
</style>