<template>
  <div class="app-main-container">
    <el-table
      :data="tableData"
      height="100%"
      style="width:100%"
      border>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="qty"
        label="数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价"
        width="180">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import purchase from '@/store/purchase'
export default {
  name: 'AppMain',
  data () {
    return {
      tableData: purchase.get()
    }
  }
}
</script>
<style scope>
  .app-main-container {
    height:calc(100vh - 135px);
    margin-top:1px;
  }
</style>
