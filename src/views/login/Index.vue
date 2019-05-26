<template>
  <el-container class="el-container">
    <el-header class="el-header" height="60px">Header</el-header>
    <el-main class="el-main">Main</el-main>
    <el-footer class="el-footer" height="30px">Footer</el-footer>
</el-container>
</template>
<script>
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
</style>
