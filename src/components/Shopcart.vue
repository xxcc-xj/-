<template>
	<button @click="back" class="back">返回</button>
    <div class="shopping-cart">
        <!-- 头部 -->
        <div class="site-header">
            <div class="container">
                <div class="head-title">
                <h2>我的追剧列表</h2>
                <p>温馨提示：影视顺序为添加时间顺序排列</p>
                </div>
            </div>
        </div>
        <!-- 购物车商品 -->
        <template v-if="lists.length">
      <div class="page-main">
        
          <div class="container-main">
            <div class="item-wrap">
              <div class="item-list">
                <div class="list-head">
                  <div class="item item-check">
                    <input type="checkbox" v-model="modelCheckedAll" @change="checkAllchange()"/>
                    全选
                  </div>
                  <div class="item-name">影视名称</div>
                <div class="item-action">操作</div>
                </div>
                <div class="goods-body">
                  <div v-for="(item, index) in lists" class="goods-list" :key="index">
                    <div class="goods-box clearfix">
                      <div class="col col-check">
                        <input type="checkbox" v-model="item.check" @change="curChange()"/>
                      </div>
                      <div class="col col-img">
                        <a href="javascript:;">
                          <img v-bind:src="item.img" width="200" height="260"/>
                        </a>
                      </div>
                      <div class="col col-name">
                        <h3 class="name">
                          <a href="javascript:;">&nbsp;{{ item.name }}</a>
                        </h3>
                      </div>
                      <div class="col col-action">
          <button @click="del(item.id)">删除</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div class="cart-bar">
            <div class="section-left">
              <a @click="add" class="back-shopping">继续添加</a>
              <span class="cart-total">
                共
                <i>{{ lists.length }}</i>
                件影视
              </span>
			  <button class="z">转发</button>
            </div>
          </div>
      </div>
    </template>
    <template v-else>
      <div class="item-empty ">
        <h1 class="text-center">追剧列表为空</h1>
      </div>
    </template>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
	  data() {
	    return {
	      modelCheckedAll: this.checkAll,
	    };
	  },
  computed: {
	 ...mapState({
		 lists:state=>state.shopcart.items,
		 checkAll: (state) => state.shopcart.checkAll,
	 }),
	 ...mapGetters('shopcart',{
	 checkGoodsNum:'checkGoodsNum',
	 }),
   },
  methods: {
	   ...mapMutations("shopcart", { changeCheckedAll: "changeCheckedAll" }),
	   // 全选的处理
	       checkAllchange() {
	        // 触发vuex方法修改state中的checkAll值
	         this.changeCheckedAll(this.modelCheckedAll);
	         for (var i = 0; i < this.lists.length; i++) {
	           this.lists[i].check = this.checkAll;
	         }
	         
	       },
  del:function(id){
  		  this.$store.dispatch('shopcart/del',id);
  },
  back(){
	  this.$router.replace('/home')
  },
  add(){
	  this.$router.replace('/goodslist')
  }
	
  }
}
</script>

<style scoped>
	.z{
		margin-left: 30px;
	}
	.item-name{
		padding-left: 360px;
		font-size: 17px;
	}
	.item-action{
		padding-left: 800px;
		margin-top: -70px;
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
	.back:hover{
		transform: scale(1.10);
	}
/* @import "~@/style/lib/font_2137770_0u9iiirb2zrg/iconfont.css"; */
/* @import "~@/style/lib/font-awesome-4.7.0/css/font-awesome.css"; */
@import "~@/style/lib/reset.css";
@import "~@/style/lib/bacs.css";
@import "~@/style/lib/shopping.css";
</style>