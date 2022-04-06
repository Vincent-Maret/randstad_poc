import { Skill, Score } from '@/models/domain'
import { JobOffer } from '@/fakeDb'

const substractSet = (
  originalSet: Set<string>,
  toBeRemovedSet: Set<string>
): Set<string> => {
  ;[...toBeRemovedSet].forEach((v) => {
    originalSet.delete(v)
  })

  return originalSet
}

function formatSkills(skills: Skill[]): {
  mainSkills: Set<string>
  broaderSkills: Set<string>
} {
  const mainSkills = new Set(skills.map((s) => s.uri))
  const broaderSkills: string[] = []

  for (const skill of skills) {
    if (skill.broaderHierarchyConcept) {
      broaderSkills.concat(skill.broaderHierarchyConcept)
    }
    if (skill.broaderSkill) {
      broaderSkills.concat(skill.broaderSkill)
    }
  }

  return {
    mainSkills,
    broaderSkills: substractSet(new Set(broaderSkills), mainSkills),
  }
}

function computeScore(
  userMainSkills: Set<string>,
  userBroaderSkills: Set<string>,
  jobSkills: Skill[]
): number {
  const { mainSkills: jobMainSkills, broaderSkills: jobBroaderSkills } =
    formatSkills(jobSkills)
  let score: number = 0

  jobMainSkills.forEach((jobMainSkill) => {
    if (userMainSkills.has(jobMainSkill)) {
      score++
      userMainSkills.delete(jobMainSkill)
    } else if (userBroaderSkills.has(jobMainSkill)) {
      score += 0.5
      userBroaderSkills.delete(jobMainSkill)
    }
  })

  jobBroaderSkills.forEach((jobBroaderSkill) => {
    if (userMainSkills.has(jobBroaderSkill)) {
      score += 0.5
      userMainSkills.delete(jobBroaderSkill)
    } else if (userBroaderSkills.has(jobBroaderSkill)) {
      score += 0.25
      userBroaderSkills.delete(jobBroaderSkill)
    }
  })

  return score === 0 ? 0 : score / (jobMainSkills.size + jobBroaderSkills.size)
}

export function getJobsMatchingScore(
  userSkills: Skill[],
  jobOffers: JobOffer[]
): Score[] {
  const { mainSkills: userMainSkills, broaderSkills: userBroaderSkills } =
    formatSkills(userSkills)

  return jobOffers.map((j) => ({
    value: computeScore(userMainSkills, userBroaderSkills, j.skills),
    jobId: j.id,
  }))
}
