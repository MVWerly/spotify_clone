import { useEffect, useState } from 'react'
import * as S from './styles'
import Section from '../Section'

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Tudo')
  const [tabs, setTabs] = useState<string[]>([])

  useEffect(() => {
    setTabs(['Tudo', 'Música', 'Podcasts'])
  }, [])

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
      <Section title="Recomendações para hoje" />
      <Section title="Artistas sugeridos" typeCard="artist" />
    </S.Main>
  )
}

export default MainContent
