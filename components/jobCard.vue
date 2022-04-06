<template>
  <div class="job-card">
    <h3 class="title">{{ job.title }}</h3>
    <div class="type">{{ job.type }}</div>
    <div class="location">{{ job.location }}</div>
    <div class="description" v-html="job.description" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { JobOffer } from '@/models/domain'

@Component
export default class JobCard extends Vue {
  @Prop({ required: true }) readonly job!: JobOffer
}
</script>

<style lang="scss" scoped>
.job-card {
  padding: 1rem;
  background: rgb(226, 226, 226);
  border-radius: 5px;
}
</style>