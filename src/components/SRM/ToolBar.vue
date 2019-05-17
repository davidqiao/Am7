<template>
  <div>
    <el-row>
      <div class="el-row-left">采购订单</div>
    </el-row>
    <el-row>
      <div class="el-row-left">
        <el-button size="small">创建</el-button>
        <el-button size="small">导入</el-button>
      </div>
      <div class="el-row-right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage: 1,
      totalCount: 300,
      pageSize: 100
    }
  }
}
</script>
<style scope>
    .el-row-left {
        margin-left: 20px;
        float: left;
        padding: 5px;
    }
    .el-row-right {
        float: right;
    }
</style>
