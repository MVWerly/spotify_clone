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
    getCategory: builder.query<CategoriesResponse, void>({
      query: () => ({
        url: '/browse/categories?locale=pt_BR&limit=15&offset=5'
      })
    }),
    getArtist: builder.query<ArtistsReponse, void>({
      query: () => ({
        url: '/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6'
      })
    })
  })
})

export const { useGetCategoryQuery, useGetArtistQuery } = spotifyApi

export default spotifyApi
