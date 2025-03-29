import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Buffer } from 'buffer'

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET

const encodedCredentials = Buffer.from(
  `${client_id}:${client_secret}`
).toString('base64')

const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
    prepareHeaders: async (headers) => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encodedCredentials}`
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        })
      })

      if (response.ok) {
        const { access_token } = await response.json()
        headers.set('Authorization', `Bearer ${access_token}`)
      } else {
        console.error('Erro ao gerar token')
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (id: string) => ({
        url: `/artists/${id}`
      })
    })
  })
})

export const { useGetArtistQuery } = spotifyApi

export default spotifyApi
