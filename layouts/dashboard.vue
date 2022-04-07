<template>
  <div id="app">
    <Menu />
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Menu from '@/components/menu/index.vue'

@Component({ components: { Menu } })
export default class DashboardLayout extends Vue {}
</script>


<style lang="scss" scoped>
.page {
  width: calc(100vw - 80px);
  margin-left: 80px;
}
</style>