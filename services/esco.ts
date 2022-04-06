import axios from 'axios'
import { SearchResult, Type } from '@/models/esco'

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
