<template>
  <div>
    <div v-for="m in routes" :key="m.name">
      {{m.name}} - {{m.description}}
    </div>
  </div>
</template>
<script>
import crm from '@/router/crm'
import srm from '@/router/srm'
export default {
  name: 'config',
  data: function () {
    return {
      routes: {
        srm,
        crm
      }
    }
  }
}
</script>
