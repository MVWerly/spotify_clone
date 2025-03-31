import { useEffect, useRef, useState } from 'react'

import CardArtist from '../CardArtist'

import * as S from './styles'

type Props = {
  title: string
  typeCard?: 'artist'
  categories?: CategoryItem[]
  artists?: Artist[]
}

const Section = ({ title, typeCard, categories, artists }: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState<boolean>()
  const [showRighttButton, setShowRighttButton] = useState<boolean>()

  const handleScroll = (direction: string) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current

      setShowLeftButton(scrollLeft > 0)
      setShowRighttButton(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current

    if (scrollContainer) {
      checkScrollButtons()

      scrollContainer.addEventListener('scroll', checkScrollButtons)

      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollButtons)
      }
    }
  }, [])

  if (!categories && !artists) {
    return <h3>Carregado...</h3>
  }

  return (
    <S.SectionContainer>
      <S.SectionTitle>
        <h2>{title}</h2>
        <span>Mostra tudo</span>
      </S.SectionTitle>
      <div>
        {showLeftButton && (
          <S.ButtonLeft onClick={() => handleScroll('left')}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </S.ButtonLeft>
        )}
        {showRighttButton && (
          <S.ButtonRight onClick={() => handleScroll('right')}>
            <i className="bi bi-arrow-right-circle-fill"></i>
          </S.ButtonRight>
        )}
        <S.CardContainer ref={scrollContainerRef}>
          {categories &&
            categories.map((category, index) => (
              <CardArtist
                title={category.name}
                image={category.icons[0].url}
                key={index}
              />
            ))}
          {artists &&
            artists.map((artist, index) => (
              <CardArtist
                typeCard="artist"
                key={index}
                image={artist.images[0].url}
                title={artist.name}
                subtitle={artist.followers.total}
              />
            ))}
        </S.CardContainer>
      </div>
    </S.SectionContainer>
  )
}

export default Section
