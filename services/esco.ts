import axios from 'axios'
import { SearchResult, Type } from '@/models/esco'

// https://ec.europa.eu/esco/api/resource/skill?uri=http://data.europa.eu/esco/skill/21d2f96d-35f7-4e3f-9745-c533d2dd6e97&language=fr

const BASE_URL: string = 'https://ec.europa.eu/esco/api'

export async function searchSkill(
  text: string,
  type: Type = 'skill'
): Promise<SearchResult> {
  const res = await axios.get(`${BASE_URL}/search`, {
    params: {
      text,
      type,
      language: 'en',
      limit: 20,
    },
  })

  return res.data
}
