
import { createRouter, createWebHistory } from 'vue-router'

var Content=()=>import('../components/Content.vue')
var ContentInfo=()=>import('../components/ContentInfo.vue')
var dmlist=()=>import('../components/dmlist.vue')
var zongylist=()=>import('../components/zongylist.vue')
var Login=()=>import('../components/Login.vue')
var home=()=>import('../components/home.vue')
var GoodsList=()=>import('../components/GoodsList.vue')
var Shopcart=()=>import('../components/Shopcart.vue')
var filmslist=()=>import('../components/filmslist.vue')

const routes = [
	{
		 path:'/',
		 component:Login
},
 {
	 path:'/content',
	 component:Content
	 
 },
 {
 	 path:'/hero/:heroid',
 	 component:ContentInfo
 },

 {
 	 path:'/filmslist',
 	 component:filmslist
 },
 {
 	 path:'/dmlist',
 	 component:dmlist
 },
 {
	 path:'/zongylist',
	 component:zongylist
},
{
 	 path:'/home',
 	 component:home
 },
 {
  	 path:'/goodslist',
  	 component:GoodsList
  },
  {
   	 path:'/shopcart',
   	 component:Shopcart
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
