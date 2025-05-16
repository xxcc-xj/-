<template>
	     <header>
	         <input type="text" class="sousuokuang" @keyup.enter='searchWeather' v-model='city' placeholder="请输入城市名称">
	         <button class="ssan" @click='searchWeather'>查询</button>
	     </header>
	     <section>
	        <div class="city" v-show="city!='' ">
	            {{city+' 天气预报如下'}}
	        </div>
	        <table border="0" class="table">
	            <tr v-show=" city!='' ">
	                <th>日期 </th>
	               <th>天气</th>
	           </tr>
	            <tr v-for='item in alllist'>
	                <td> {{item.date}} </td>
	                <td> {{item.wea}} </td>
	            </tr>
	        </table>
	    </section>
</template>

<script>
	import axios from 'axios'
   export default{
	   data:function(){
		   return{
			   city: '',
			   alllist: [],
		   }
	   },
	   methods: {
	       searchWeather: function () {
	           var that = this
	           axios.get('http://v1.yiketianqi.com/api?unescape=1&version=v9&appid=31743455&appsecret=b3Un5e14&city='
				+ this.city).then
	               (function (res) {
	                   console.log(res.data);
	                   that.alllist = res.data.data
	                   console.log(that.alllist);
	               }, function (err) {
	                   console.log(err);
	               })
	       }
	   },
   }
</script>

<style scoped>
	          header {
	              display: flex;
	              height: 25px;
				  padding-left: 10px;
	          }
	          .sousuokuang {
	              width: 150px;
	              height: 20px;
	              font-size: 15px;
	              text-align: center;
	              color: black;
	          }
	         .ssan {
	              width: 55px;
				  margin-left: 10px;
	              font-size: 15px;
				  border: none;
				  color: white;
				  border-radius: 20px;
	              background-color:limegreen;
	          }
	          .ssan:hover {
	              transform: scale(1.10);
	          }
	          section {
	              height: 200px;
	          }
	          .table {
	              width:250px;
	              text-align: center;
	          }
	          .city {
	              width: 200px;
				  padding-top: 10px;
				  padding-left: 10px;
	              text-align: center;
	              font-family: '楷体';
	              font-size: 20px;
	              color: aquamarine;
	          }
	          .sun {
	              position: absolute;
	              width: 200px;
	              height: 200px;
	              top: -150px;
	          }  
	          li {
	              list-style: none;
	          }
	         td{
	             height: 10px;
	         }
</style>
