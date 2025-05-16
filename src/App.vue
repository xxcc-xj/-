<template>
	
	<div >
		<header class="header">爱奇艺视频</header>
		 <div class="main">
			 <router-view></router-view>
		 </div>
		<div class="footer"><footer >
			<p>版权信息0.0.0.0.0<br />举报邮箱xxxx12345@123.com<br />举报电话：000-000-0000</p>
		</footer>
		</div>
	</div>
</template>

<script>
</script>

<style>
html,
body,
#app{
	margin: 0;
	padding: 0;
	height: 100%;
	background-color: #202020;
}
.header{
	height: 50px;
	line-height: 50px;
	background-color: #202020;
	padding-left: 20px;
	font-size: 20px;
	color: limegreen;
}
.main{
	width: 100%;
	height: 2700px;
}
.footer{
	margin-top: 250px;
	height: 150px;
	line-height: 50px;
	background-color: #404040;
	text-align: center;
	font-size: 18px;
	color: #b0b0b0;
	bottom: 0;
	width: 100%;
}

</style>
