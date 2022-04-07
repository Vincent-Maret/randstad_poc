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
  location: string
  type: JobType
  skillList: Skill[]
}

export interface User {
  id: number
  skills: Skill[]
}
