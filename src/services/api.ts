import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com',
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_SPOTIFY_API
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      if (!token) {
        console.error('Token não está configurado')
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    getTopTracks: builder.query<TrackResponse, void>({
      query: () => 'v1/me/top/tracks?time_range=long_term&limit=5'
    })
  })
})

export const { useGetTopTracksQuery } = spotifyApi

export default spotifyApi
