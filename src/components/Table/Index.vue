<template>
<div v-loading="loading" class="div-container">
  <div class="tool-bar-index">
    <el-row>
      <div class="el-row-left">{{title}}</div>
    </el-row>
    <el-row>
      <div class="el-row-left">
        <el-button size="small">创建</el-button>
        <el-button size="small">导入</el-button>
      </div>
      <div class="el-row-right">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="query.page"
          :page-size="query.limit"
          layout="total, prev, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
    </el-row>
  </div>
  <el-table
    :data="tableData"
    height="100%"
    style="width:100%"
    border>
    <el-table-column
    type="index"
    :index="indexMethod"
    :width="indexWidth"
    show-overflow-tooltip>
    </el-table-column>
    <el-table-column
    type="selection"
    :resizable="false">
    </el-table-column>
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
import purchase from '@/store/order'
export default {
  name: 'Table',
  data () {
    return {
      tableData: null,
      loading: true,
      totalCount: 0,
      indexWidth: 40,
      title: this.$route.matched[this.$route.matched.length - 1].meta.title,
      query: {
        ormID: this.$route.matched[this.$route.matched.length - 1].meta.ormID,
        page: 1,
        limit: 100
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      this.loading = true
      let data = await purchase.get(this.query)
      this.totalCount = data.count
      this.tableData = data.data
      this.loading = false
    },
    handleCurrentChange (val) {
      this.query.page = val
      this.getList()
      this.getIndexWidth()
    },
    indexMethod (index) {
      return index + (this.query.page - 1) * this.query.limit + 1
    },
    getIndexWidth () {
      let len = (this.query.page * this.query.limit).toString().length
      console.log(len)
      this.indexWidth = len * 10 + 10
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

  .tool-bar-index{
    height: 70px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1)
  }

  .div-container{
    height: 100%;
    width:100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
  }
</style>
