import { JobId } from '@/fakeDb'

export interface Skill {
  title: string
  uri: string
  broaderHierarchyConcept?: Set<string>
  broaderSkill?: Set<string>
}

export interface Score {
  value: number
  jobId: JobId
}
