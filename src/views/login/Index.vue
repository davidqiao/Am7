<template>
  <el-container class="el-container">
    <el-header class="el-header" height="60px">Header</el-header>
    <el-main class="el-main">
      <div class="login-box">
        <el-form :model="loginForm">
          <div style="margin-bottom:10px">
            系统登陆
          </div>
          <el-form-item prop="username">
            <el-input type="text" placeholder="username" v-model="loginForm.username" autocomplete="on">
              <template #prefix>
                <span class="svg-container">
                  <svg-icon icon-class="user" style="width:15px"/>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :type="passwordType" placeholder="password" v-model="loginForm.password" autocomplete="off" ref="password">
              <template #prefix>
                <span class="svg-container">
                  <svg-icon icon-class="lock" style="width:14px"/>
                </span>
              </template>
              <template #suffix>
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" style="width:14px"/>
                </span>
              </template>
            </el-input>
          </el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">
            login
          </el-button>
          <div style="font-size:12px;color:#889aa4">
            其他登陆方式
          </div>
          <div style="margin-top:30px">
            <span style="cursor:pointer">
              <svg-icon icon-class="wechat" style="width:23px"/>
            </span>
            <span style="cursor:pointer">
              <svg-icon icon-class="weibo" style="width:100px"/>
            </span>
            <span style="cursor:pointer">
              <svg-icon icon-class="qq" style="width:23px"/>
            </span>
          </div>
        </el-form>
      </div>
    </el-main>
    <el-footer class="el-footer" height="30px">Footer</el-footer>
</el-container>
</template>
<script>
import Login from '@/api/login'
export default{
  name: 'login',
  data: function () {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loading: false,
      passwordType: 'password'
    }
  },
  methods: {
    async handleLogin () {
      this.loading = true
      await Login.login()
      this.loading = false
      this.$router.push('/srm')
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>
<style scoped>
.el-container{
  height: 100%;
}

.el-header {
  background-color: #EFF4FA;
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
  height: calc(100vh - 90px);
}
.el-footer {
  background-color: #EFF4FA;
  color: #333;
  text-align: center;
}
.login-box{
  width: 300px;
  height: 300px;
  border: solid 1px #DFDFDF;
  border-radius: 4px;
  position: fixed;
  right: 100px;
  top: 150px;
  padding: 20px;
}

.svg-container {
    padding-top: 5px;
    padding-left: 3px;
    color: #889aa4;
    vertical-align: middle;
    display: inline-block;
  }
.show-pwd{
  padding-top: 5px;
  padding-right: 3px;
  color: #889aa4;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
}
</style>
