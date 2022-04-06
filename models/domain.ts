import { JobId } from '@/fakeDb'

export interface Skill {
  title: string
  uri: string
  broaderHierarchyConcept?: string[]
  broaderSkill?: string[]
}

export interface Score {
  value: number
  jobId: JobId
}
