<template>
  <div>
    <h1>Home</h1>
    <nuxt-link :to="'/profile'">Profil</nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>