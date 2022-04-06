import { Skill } from '@/models/domain'

export type JobId = number

export interface JobOffer {
  id: JobId
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
    skills: [
      {
        title: 'Jenkins (tools for software configuration management)',
        uri: 'http://data.europa.eu/esco/skill/f47a1998-0beb-43be-9f46-380aa4d183da',
      },
      {
        title: 'cloud technologies',
        uri: 'http://data.europa.eu/esco/skill/bd14968e-e409-45af-b362-3495ed7b10e0',
      },
      {
        title: 'monitor system performance',
        uri: 'http://data.europa.eu/esco/skill/9190d87f-9792-42e0-bb7f-64294a656bcd',
      },
      {
        title: 'maintain database',
        uri: 'http://data.europa.eu/esco/skill/0df2e216-68ae-4952-b9dc-3c2f2bc04fe3',
      },
    ],

    location: 'Paris',
    type: 'CDI',
    description:
      "Dans le cadre de son développement et pour ses prochaines ambitieuses productions, QUANTIC DREAM étoffe ses équipes R&D et notamment d'ingénieurs développement pour renforcer l'équipe actuelle et participer à l'amélioration des outils internes et de l'infrastructure dédiés aux autres équipes/ services R&D.<br><br>Vous intégrerez une équipe dynamique et passionnée, en ayant l'opportunité de travailler sur des projets ambitieux et innovants.<br><br>Sous la responsabilité du Lead /Responsable du service R&D Outils, dans un environnement convivial et avec l'esprit d'équipe, vous serez ainsi notamment en charge de l'amélioration de :<br> Nos processus d'intégration continue ;<br> Nos outils de monitoring logiciels : outils et projets ;<br> Nos outils de déploiement logiciels : outils et projets ;<br> Notre infrastructure dédiée aux calculs lourds : solutions et projets.<br><br>Nous recrutons des personnes talentueuses désirant évoluer dans un environnement hautement technique et manifestant un intérêt marqué pour le développement des outils.<br>",
  },
]
