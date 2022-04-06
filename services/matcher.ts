import { Skill, Score } from '@/models/domain'
import { JobOffer } from '@/fakeDb'

function computeScore(skillsUri: Set<string>, offer: JobOffer): number {
  const matchingSkillsCount: number = offer.skills.filter((s) =>
    skillsUri.has(s.uri)
  ).length

  return matchingSkillsCount === 0
    ? 0
    : matchingSkillsCount / offer.skills.length
}

export function getJobsMatchingScore(
  userSkills: Skill[],
  jobOffers: JobOffer[]
): Score[] {
  const userSkillsUri: Set<string> = new Set(userSkills.map((s) => s.uri))

  return jobOffers.map((j) => ({
    value: computeScore(userSkillsUri, j),
    jobId: j.id,
  }))
}
