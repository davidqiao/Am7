<template>
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
</template>
<script>
import purchase from '@/store/srm.purchase'
export default {
  name: 'AppMain',
  data () {
    return {
      tableData: purchase.get()
    }
  }
}
</script>
