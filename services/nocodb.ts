import axios from 'axios'
import { JobOffer, Skill, SkillType, User } from '@/models/domain'

const BASE_URL: string = 'https://randstaddb.herokuapp.com'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmV0dmluY2VudEBwcm90b25tYWlsLmNvbSIsImZpcnN0bmFtZSI6bnVsbCwibGFzdG5hbWUiOm51bGwsImlkIjoxLCJyb2xlcyI6InVzZXIiLCJpYXQiOjE2NDkyMzkwMDJ9.6hM1pyTIKyMdDyR6gVC7iWg21t2HFdiWDxsfBu40z6o' as const

const nocoDbAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'xc-auth': token,
    'content-type': 'application/json',
  },
})

export async function createJobOffer(
  jobData: Partial<JobOffer>
): Promise<void> {
  await nocoDbAxios.post('/nc/randstad_3l3o/api/v1/jobOffer', {
    ...jobData,
    skills: { data: jobData.skills },
  })
}

export async function getJobOffers(): Promise<JobOffer[]> {
  const res = await nocoDbAxios.get('/nc/randstad_3l3o/api/v1/jobOffer')

  return res.data.map((jobOffer: any) => ({
    ...jobOffer,
    skills: jobOffer.skills.data,
  }))
}

export async function getSkillsByType(type: SkillType): Promise<Skill[]> {
  const res = await nocoDbAxios.get('/nc/randstad_3l3o/api/v1/skill', {
    params: {
      where: `(type,eq,${type})`,
    },
  })

  return res.data
}

export async function searchSkillsByType(
  type: SkillType,
  text: string
): Promise<Skill[]> {
  const res = await nocoDbAxios.get('/nc/randstad_3l3o/api/v1/skill', {
    params: {
      where: `(type,eq,${type})~and(title,like,%${text}%)`,
    },
  })

  return res.data
}

export async function getUser(id: number): Promise<User> {
  const res = await nocoDbAxios.get(`/nc/randstad_3l3o/api/v1/user/${id}`)

  // res.data.skills = res.data.skills ? res.data.skills.data : []

  return res.data
}

export async function saveUser(user: User): Promise<void> {
  const newUser = { ...user, skills: { data: user.skills } }

  await nocoDbAxios.put(`/nc/randstad_3l3o/api/v1/user/${user.id}`, newUser)
}
