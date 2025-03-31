declare type CategoryIcon = {
  url: string
}

declare type CategoryItem = {
  icons: CategoryIcon[]
  name: string
}

declare type CategoriesResponse = {
  categories: {
    items: CategoryItem[]
  }
}

declare type ArtistImage = {
  url: string
}

declare type Artist = {
  name: string
  images: ArtistImage[]
  followers: {
    total: number
  }
}

declare type ArtistsReponse = {
  artists: Artist[]
}
