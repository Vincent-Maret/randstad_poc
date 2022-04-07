export type SkillType = 'hard' | 'soft' | 'lang'

export interface Skill {
  id: number
  title: string
  type: SkillType
}

export type JobId = number

export const jobTypes = ['CDI', 'CDD', 'iterim', 'stage'] as const

type JobType = typeof jobTypes[number]

export interface JobOffer {
  id: JobId
  title: string
  description: string
  requiredProfile: string
  company: string
  skills: Skill[]
  location: string
  type: JobType
}

export interface Score {
  value: number
  jobId: JobId
}

export interface User {
  id: number
  skills: Skill[]
}
