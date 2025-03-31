import { useEffect, useState } from 'react'
import * as S from './styles'
import Section from '../Section'
import {
  useGetCategoryQuery,
  useGetArtistQuery
} from '../../services/spotifyApi'

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Tudo')
  const [tabs, setTabs] = useState<string[]>([])
  const { data: categoriesResponse } = useGetCategoryQuery()
  const { data: artistsResponse } = useGetArtistQuery()

  useEffect(() => {
    setTabs(['Tudo', 'Música', 'Podcasts'])
  }, [])

  if (!categoriesResponse) {
    return <h3>Carregando...</h3>
  }
  if (!artistsResponse) {
    return <h3>Carregando...</h3>
  }

  const { categories } = categoriesResponse
  const { items } = categories

  const { artists } = artistsResponse

  return (
    <S.Main>
      <S.TabContainer>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'is-active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </S.TabContainer>
      <Section title="Categorias" categories={items} />
      <Section title="Artistas" artists={artists} />
    </S.Main>
  )
}

export default MainContent
