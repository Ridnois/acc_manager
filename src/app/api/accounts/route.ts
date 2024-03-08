import { FEATURES } from '@/config'
import { AccountResponse } from '@/models/accounts'
import { promises as fs } from 'fs'

export const getResponseFile = async (responseFile: string) => {
  const file = await fs.readFile(
    `${process.cwd()}/__mock__/${responseFile}.json`,
    'utf-8'
  )
  return JSON.parse(file)
}

const enableMock = process.env[FEATURES.ENABLE_MOCK_REPONSE] != 'true'

export const getAccounts = async (): Promise<AccountResponse> => {
  if (enableMock) {
    const response = await getResponseFile('accountsResponse')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      })
    })
  }

  const url = process.env.API_URL + '/accounts'
  const response = await fetch(url)

  return await response.json() as Promise<AccountResponse>
}

export async function GET() {
  const response = await getAccounts()

  return Response.json(response)

}
