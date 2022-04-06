<template>
  <NuxtLink :to="item.path">
    <Icon :name="item.icon" />
  </NuxtLink>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Icon from '@/components/ui/icon/index.vue'

export interface Item {
  path: string
  icon: string
}

@Component({ components: { Icon } })
export default class MenuItem extends Vue {
  @Prop({ required: true }) readonly item!: Item
}
</script>