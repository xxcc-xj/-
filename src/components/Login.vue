<template>
  <div class="body">
    <div class="container" id="login-box">
      <div class="form-container sign-up-container">
        <form>
          <h1>注册</h1>
          <div class="txtb">
            <input type="text" v-model.trim="s_name" >
            <span data-placeholder="昵称"></span>
          </div>
		  <span :for="error3" class="error">{{error3}}</span>
		  
          <div class="txtb">
            <input type="email" v-model.trim="s_email">
            <span data-placeholder="邮箱"></span>
          </div>
		  <span :for="error4" class="error">{{error4}}</span>
		  
          <div class="txtb">
            <input type="password" v-model.trim="s_password">
            <span data-placeholder="密码"></span>
          </div>
		  <span :for="error5" class="error">{{error5}}</span>
		  
          <div class="txtb">
            <input type="password" v-model.trim="s_password_r">
            <span data-placeholder="确认密码"></span>
          </div>
		  <span :for="error6" class="error">{{error6}}</span>
          <button type="button" @click="register">注册</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <h1>登录</h1>
          <div class="txtb">
            <input type="email" v-model.trim="email">
            <span data-placeholder="邮箱"></span>
          </div>
		  <span :for="error1" class="error">{{error1}}</span>
          <div class="txtb">
            <input type="password" v-model.trim="password">
            <span data-placeholder="密码"></span>
          </div>
		  <span :for="error2" class="error">{{error2}}</span>
		  <br>
          <button type="button" @click="login">登录</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 style="color: #fff;">已有账号？</h1>
            <p>请使用您的账号进行登录</p>
            <button class="ghost" id="signIn">登录</button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 style="color: #fff;">没有账号? </h1>
            <p>立即注册加入，开始你的旅程吧</p>
            <button class="ghost" id="signUp">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
	
  data() {
    return {
      email: "",
      password: "",
      s_name: "",
      s_email: "",
      s_password: "",
      s_password_r: "",
      r_user: {
        email: '',
        name: '',
        password: ''
      },
	  error1:' ',
	  error2:' ',
	  error3:' ',
	  error4:' ',
	  error5:' ',
	  error6:' '
    };
  },
  methods: {
	  back(){
		 this.$router.push('/Content') 
	  },
    login() {
      if (this.email === '' || this.password === '')
           {
			 this.error1='登录邮箱不能为空！'
			 this.error2='密码不能为空！'
           }
           else {
			   this.error1=' '
			   this.error2=' '
			   alert('登录成功！')
			   this.$router.replace('/home');
           }
    },
    register() {
      if (this.s_email === '' || this.s_name === '' || this.s_password ===''|| this.s_password_r==='') {
		  this.error3='昵称不能为空！'
		  this.error4='邮箱不能为空！'
		  this.error5='密码不能为空！'
		  this.error6='确认密码不能为空！'
      }
      else {
		  alert("注册成功！")
		  this.error3=''
		  this.error4=''
		  this.error5=''
		  this.error6=''
      }
    },
  },
  mounted() {
    //动画
    $("#signUp").click(function () {
      $("#login-box").addClass('right-panel-active')
    })
    $("#signIn").click(function () {
      $("#login-box").removeClass('right-panel-active')
    })
    $(".txtb input").on("focus", function () {
      $(this).addClass("focus")
    })

    $(".txtb input").on("blur", function () {
      if ($(this).val() == '')
        $(this).removeClass("focus")
    })
  },
  
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: 'Montserrat', sans-serif;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 900px;
  margin: 0 px;
}

h1 {
  font-weight: bold;
  margin: 0;
  font-size: 25px;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 20px 0 30px;
  width: 100%;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  opacity: 1;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;

}

.txtb {
  border-bottom: 2px solid #adadad;
  position: relative;
  margin: 10px 0;
}

.txtb input {
  font-size: 15px;
  color: #333;
  border: none;
  width: 100%;
  outline: none;
  background: none;
  padding: 0 3px;
  height: 35px;
}

.txtb span::before {
  content: attr(data-placeholder);
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  transition: .5s;
}

.txtb span::after {
  content: '';
  position: absolute;
  left: 0%;
  top: 100%;
  width: 0%;
  height: 2px;
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  transition: .5s;
}

.focus+span::before {
  top: -5px;
}

.focus+span::after {
  width: 100%;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background: #ff4b2b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all .6s ease-in-out;
}

.form-container button {
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  border: none;
  background-size: 200%;
  color: #fff;
  transition: .5s;
}

.form-container button:hover {
  background-position: right;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-in-container form a {
  position: relative;
  left: 100px;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.sign-up-container button {
  margin-top: 20px;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform .6s ease-in-out;
  z-index: 100;
}

.overlay {
  background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);

}

.overlay-left {
  transform: translateY(-20%);
}

.container.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

.container.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

.container.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.container.container.right-panel-active .overlay-left {
  transform: translateY(0);
}

.container.container.right-panel-active .overlay-right {
  transform: translateY(20%);
}

/* 设置选中后的文字颜色 */
.el-checkbox__input.is-checked+.el-checkbox__label {
  color: #333;
}

/* 设置选中后对勾框的边框和背景颜色 */
.el-checkbox__input.is-checked .el-checkbox__inner,
.myCheckBox .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #f68084
}

/* 设置checkbox获得焦点后，对勾框的边框颜色 */
.el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: #f68084;
}

/* 设置鼠标经过对勾框，对勾框边框的颜色 */
.el-checkbox__inner:hover {
  border-color: #f68084;
}
.error{
	color: red;
	font-size: 12px;
}
</style>