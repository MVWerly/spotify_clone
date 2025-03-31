import * as S from './styles'

type Props = {
  typeCard?: 'artist'
  title: string
  subtitle?: string | number
  image: string
}

const CardArtist = ({ typeCard, title, subtitle, image }: Props) => (
  <S.Card $typeCard={typeCard}>
    <img src={image} />
    <div>
      <h3>{title}</h3>
      <span>{typeCard === 'artist' ? subtitle + ` seguidores` : subtitle}</span>
      <button>
        <i className="bi bi-play-circle-fill"></i>
      </button>
    </div>
  </S.Card>
)

export default CardArtist
