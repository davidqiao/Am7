<template>
    <el-table
    height="100%"
    style="width:100%"
    :data="data"
    :row-key="getRowKey"
    border>
      <el-table-column
      type="index"
      align="center"
      :index="index"
      :width="fixWidth">
      </el-table-column>
      <el-table-column
      type="selection"
      align="center"
      :resizable="false"
      reserve-selection>
      </el-table-column>
      <el-table-column
      v-for="struct in struct"
      :key="struct.prop"
      :prop="struct.prop"
      :label="struct.label"
      :width="struct.width"
      show-overflow-tooltip>
      </el-table-column>
    </el-table>
</template>
<script>
export default {
  name: 'Table',
  props: {
    data: {
      type: Array,
      required: true
    },
    struct: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getRowKey (row) {
      return row.id
    }
  },
  computed: {
    fixWidth () {
      return ((this.index + this.data.length).toString().length + 2) * 10
    }
  }
}
</script>
