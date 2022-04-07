<template>
  <div id="app">
    <Nuxt v-if="ready" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { getUser } from '@/services/nocodb'

@Component
export default class DefaultLayout extends Vue {
  ready: boolean = true
  // async mounted(): Promise<void> {
  //   const user = await getUser(1)
  //   this.$store.commit('SET_USER', user)
  //   this.ready = true
  // }
}
</script>

