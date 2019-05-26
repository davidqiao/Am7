<template>
  <div class="div-container">
    <el-row>
      <div class="el-row-left">{{title}}</div>
    </el-row>
    <el-row>
      <div class="el-row-left">
        <el-button size="mini">{{$t('components.toolbar.new')}}</el-button>
        <el-button size="mini">{{$t('components.toolbar.import')}}</el-button>
        <el-button size="mini" v-if="show">{{$t('components.toolbar.delete')}}</el-button>
      </div>
      <div class="el-row-right">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="limit"
          layout="total, prev, next, jumper"
          :total="count">
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Toolbar',
  props: {
    title: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 100
    },
    count: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$emit('page-change', val)
    }
  }
}
</script>
<style scoped>
  .el-row-left {
    margin-left: 20px;
    float: left;
    padding: 5px;
  }
  .el-row-right {
    float: right;
  }
  .div-container{
    height: 70px;
  }
</style>
