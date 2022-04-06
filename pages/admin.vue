<template>
  <div class="p-4">
    <h1>Job offer form</h1>

    <BForm @submit.prevent="submit">
      <BFormGroup label="Job title">
        <BFormInput v-model="jobData.title" type="text" />
      </BFormGroup>
      <BFormGroup label="Type of contract">
        <BFormSelect v-model="jobData.type" :options="jobTypes" />
      </BFormGroup>
      <BFormGroup label="Location">
        <BFormInput v-model="jobData.location" type="text" />
      </BFormGroup>
      <BFormGroup label="description">
        <BFormTextarea v-model="jobData.description" />
      </BFormGroup>
      <SkillFinder
        :forbidden-skills="skillsUri"
        @skill-selected="(skill) => jobData.skills.push(skill)"
      />
      <BFormGroup label="Required profile">
        <BFormTextarea v-model="jobData.requiredProfile" />
      </BFormGroup>
      <BFormGroup label="Company">
        <BFormTextarea v-model="jobData.company" />
      </BFormGroup>
      <BButton type="submit">Submit</BButton>
    </BForm>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { JobOffer, jobTypes } from '@/models/domain'
import { createJobOffer } from '@/services/nocodb'
import SkillFinder from '@/components/skillFinder.vue'

@Component({ components: { SkillFinder } })
export default class Admin extends Vue {
  jobTypes = jobTypes
  jobData: Partial<JobOffer> = {
    title: '',
    type: 'CDI',
    description: '',
    requiredProfile: '',
    company: '',
    location: '',
    skills: [],
  }

  get skillsUri(): Set<string> {
    const uris: string[] = this.jobData.skills!.map((s) => s.uri)
    return new Set(uris)
  }

  async submit() {
    await createJobOffer(this.jobData)
  }
}
</script>