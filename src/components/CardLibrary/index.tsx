import * as S from './styles'

type Props = {
  toogle: boolean
}

const CardLibrary = ({ toogle }: Props) => (
  <S.Card $toogle={toogle}>
    <div>
      <i className="bi bi-heart-fill"></i>
    </div>
    {toogle && (
      <>
        <div>
          <h3>Músicas favoritas</h3>
          <span>
            <i className="bi bi-pin-angle-fill"></i>Playlist
          </span>
        </div>
      </>
    )}
  </S.Card>
)

export default CardLibrary
