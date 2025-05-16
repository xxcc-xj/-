<template>
	<div class="change-img" @mouseover="stopChange" @mouseleave="startChange">
		
			<div class="img-container" >
				<img :src="img.src" alt="" v-for="(img,index) in images" :key="index"/>
			</div>
			<ul class="icon">
					<li v-for="(item,index) in images" :key="index"
						@click="changeImg(index)"
						ref="indexRef"
					>{{index}}</li>
				</ul> 
			<div class="prev" @click="goPrev">《</div>
			<div class="next" @click="goNext">》</div>
		</div> 
</template>
<script>
	export default {
		name: 'ImageScroll',
		data: function() {
			return {
				images: [
					{
						src:require('../assets/img1.jpg')
					},
					{
						src:require('../assets/img2.jpg')
					},
					{
						src:require('../assets/img3.jpg')
					},
					{
						src:require('../assets/img4.jpg')
					},
					{
						src:require('../assets/img5.jpg')
					}
				],

				currentIndex:0,
				 t:null 
			}
		},
		methods: {
				goPrev(){
					if(this.currentIndex === 0){
						this.currentIndex = this.images.length - 1
					}else{
						this.currentIndex--;
					};
					this.changeImg(this.currentIndex);
				},
				goNext(){
					if(this.currentIndex === this.images.length - 1){
						this.currentIndex = 0
					}else{
						this.currentIndex++;
					};
					this.changeImg(this.currentIndex);
				}, 
				stopChange(){
					clearInterval(this.t);
				},
				startChange(){
					this.autoChange();
				} ,
			autoChange(){
				this.t = setInterval(() => {
					if(this.currentIndex === this.images.length - 1){
						this.currentIndex = 0
					}else{
						this.currentIndex++;
					};
					this.changeImg(this.currentIndex);
				},2000);
			},
			changeImg(i){
				document.querySelector(".img-container").style.transform = `translate(${-1400 * i}px)`;
				this.changeIcomColor(i); 
			},
				changeIcomColor(i){
					this.$refs.indexRef.forEach((l) => {
						l.style.backgroundColor = "";
					});
					this.$refs.indexRef[i].style.backgroundColor = "green";
				}, 
		},
		mounted() {
			  this.autoChange();
		},
		beforeUnmount(){
			clearInterval(this.t);
		}
	}
</script>

<style>
	.change-img{
	    width:1400px;
	    height:auto;
	    position:absolute;
		top:50px;
		left:200px;
	    overflow: hidden;
	}
	.img-container{
	    width:7000px;
	    height:auto;
	    display:flex;
	}
	.img-container img{
	    width:1400px;
	    height:auto;
	} 
	.change-img .prev, .change-img .next{
	    position:absolute;
	    top:50%;
	    width:23px;
	    height:27px;
	    background: #777;
	    color:#fff;
	    line-height:25px;
	    cursor:pointer;
	}
	.change-img .prev{
	    left:2px;
	    text-align:left;
	}
	.change-img .next{
	    right:2px;
	    text-align:right;
	} 
	.change-img .icon{
	    position:absolute;
	    bottom:10px;
	    right:40%;
	}
	.change-img .icon li{
	    float:left;
	    list-style:none;
	    width:20px;
	    height:20px;
	    background: #666;
	    color:#fff;
	    margin-left:10px;
	    text-align:center;
	    line-height:20px;
	    border-radius: 50%;
	    overflow: hidden;
	    cursor:pointer;
	} 
</style>
