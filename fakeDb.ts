import { Skill } from '@/models/domain'

export interface JobOffer {
  id: number
  title: string
  description: string
  skills: Skill[]
  location: string
  type: 'CDI' | 'CDD' | 'interim' | 'stage'
}

export const jobOffers: JobOffer[] = [
  {
    id: 1,
    title: 'DÉVELOPPEUR OUTILS DEVOPS (H/F) EN CDI',
    skills: [],
    location: 'Paris',
    type: 'CDI',
    description:
      "Dans le cadre de son développement et pour ses prochaines ambitieuses productions, QUANTIC DREAM étoffe ses équipes R&amp;amp;D et notamment d'ingénieurs développement pour renforcer l'équipe actuelle et participer à l'amélioration des outils internes et de l'infrastructure dédiés aux autres équipes/ services R&amp;amp;D.<br><br>Vous intégrerez une équipe dynamique et passionnée, en ayant l'opportunité de travailler sur des projets ambitieux et innovants.<br><br>Sous la responsabilité du Lead /Responsable du service R&amp;amp;D Outils, dans un environnement convivial et avec l'esprit d'équipe, vous serez ainsi notamment en charge de l'amélioration de :<br> Nos processus d'intégration continue ;<br> Nos outils de monitoring logiciels : outils et projets ;<br> Nos outils de déploiement logiciels : outils et projets ;<br> Notre infrastructure dédiée aux calculs lourds : solutions et projets.<br><br>Nous recrutons des personnes talentueuses désirant évoluer dans un environnement hautement technique et manifestant un intérêt marqué pour le développement des outils.<br>",
  },
]
