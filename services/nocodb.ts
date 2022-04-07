import axios from 'axios'
import { JobOffer } from '@/models/domain'

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
