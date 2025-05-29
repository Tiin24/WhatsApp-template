import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.api.nahuefer.com/api',
  headers: {
    Accept: 'application/json',
    'X-tenant': '78cd60c9-e767-4d1e-b45d-6ba74f3742ee'
  }
})

export const getTemplates = async (page = 1) => {
  const response = await api.get('/templates', {
    params: {
      page,
      rows_per_page: 15,
    },
  })

  return response.data
}
