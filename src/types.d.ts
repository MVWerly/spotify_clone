declare type Artist = {
  name: string
}

declare type Track = {
  name: string
  artists: Artist[]
}

declare type TrackResponse = {
  items: Track[]
}
