<template>
  <div class="p-4">
    <JobCard v-for="job in jobOffers" :key="job.id" :job="job" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { jobOffers, JobOffer } from '@/fakeDb'
import JobCard from '@/components/jobCard.vue'

@Component({ layout: 'dashboard', components: { JobCard } })
export default class Jobs extends Vue {
  jobOffers: JobOffer[] = jobOffers
}
</script>