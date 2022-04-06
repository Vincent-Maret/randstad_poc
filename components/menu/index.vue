<template>
  <nav class="menu">
    <MenuItem
      v-for="item in items"
      :key="item.path"
      :item="item"
      class="mb-4"
    />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MenuItem, { Item } from './menuItem.vue'

@Component({ components: { MenuItem } })
export default class Menu extends Vue {
  items: Item[] = [
    {
      path: '/',
      icon: 'cv',
    },
    {
      path: '/jobs',
      icon: 'job',
    },
  ]
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100vh;
  width: 80px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(209, 209, 209);
  padding: 2rem 0;
}
</style>