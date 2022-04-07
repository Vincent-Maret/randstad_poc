<template>
  <div class="p-5">
    <h1>Consulter mes <span>matchs</span></h1>
    <JobCard
      v-for="job in jobOffers"
      :key="job.id"
      class="mb-4"
      :job="job"
      :score="scores[job.id]"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import JobCard from '@/components/jobCard.vue'
import { getJobOffers } from '@/services/nocodb'
import { Skill, JobOffer } from '@/models/domain'

@Component({ components: { JobCard } })
export default class Matchs extends Vue {
  jobOffers: JobOffer[] = []

  get userSkills(): Set<number> {
    return new Set(this.$store.state.user.skills.map((s: Skill) => s.id))
  }

  get scores(): Record<number, number> {
    const scores: Record<number, number> = {}

    for (const job of this.jobOffers) {
      scores[job.id] = this.computeScore(job)
    }

    return scores
  }

  async mounted(): Promise<void> {
    this.jobOffers = await getJobOffers()
  }

  computeScore(job: JobOffer): number {
    const matchingSkills: number = job.skillList.filter((s) =>
      this.userSkills.has(s.id)
    ).length

    return matchingSkills === 0
      ? 0
      : (matchingSkills / job.skillList.length) * 100
  }
}
</script>

<style lang="scss" scoped>
h1 > span {
  color: var(--custom-pink);
}
</style>