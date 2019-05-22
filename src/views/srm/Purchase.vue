<template>
  <div v-loading="loading">
    <div>
      <toolbar
      v-if="tableData"
      title="采购订单"
      :limit="limit"
      @page-change="pageChange"
      :count="tableData.count">
      </toolbar>
    </div>
    <div class="div-table">
      <base-table
      v-if="tableData"
      :index = "index"
      :data="tableData.data"
      :struct="tableData.struct">
      </base-table>
    </div>
  </div>
</template>
<script>
import BaseTable from '@/components/Table'
import Toolbar from '@/components/Toolbar'
import model from '@/models/purchase'
import system from '@/models/system'
export default {
  name: 'Purchase',
  components: {BaseTable, Toolbar},
  data: function () {
    return {
      tableData: null,
      loading: true,
      limit: system.limit,
      index: 1
    }
  },
  methods: {
    async getModel (page) {
      page = page || 1
      this.loading = true
      this.tableData = await model.get({
        page: page,
        limit: this.limit
      })
      this.index = (page - 1) * this.limit + 1
      this.loading = false
    },
    pageChange (val) {
      this.getModel(val)
    }
  },
  created () {
    this.getModel()
  }
}
</script>
<style scoped>
  .div-table{
    height: calc(100vh - 135px);
  }
</style>
