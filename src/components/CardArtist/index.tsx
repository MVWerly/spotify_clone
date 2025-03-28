import * as S from './styles'

type Props = {
  typeCard?: 'artist'
}

const CardArtist = ({ typeCard }: Props) => (
  <S.Card $typeCard={typeCard}>
    <img src="https://placehold.co/176x176" />
    <div>
      <h3>Album</h3>
      <span>Artista</span>
      <button>
        <i className="bi bi-play-circle-fill"></i>
      </button>
    </div>
  </S.Card>
)

export default CardArtist
