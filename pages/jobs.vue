<template>
  <div class="p-4">
    <JobCard v-for="job in jobOffers" :key="job.id" :job="job" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import JobCard from '@/components/jobCard.vue'
import { getJobsMatchingScore } from '@/services/matcher'
import { getJobOffers } from '@/services/nocodb'
import { Score, Skill, JobOffer } from '@/models/domain'

@Component({ layout: 'dashboard', components: { JobCard } })
export default class Jobs extends Vue {
  jobOffers: JobOffer[] = []
  matchingScores: Score[] = []

  get userSkills(): Skill[] {
    return this.$store.state.userSkills
  }

  async mounted(): Promise<void> {
    this.jobOffers = await getJobOffers()
    this.matchingScores = getJobsMatchingScore(this.userSkills, this.jobOffers)
  }
}
</script>