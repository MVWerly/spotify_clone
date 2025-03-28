import * as S from './styles'

type Props = {
  toogle: boolean
  typeFooter?: boolean
}

const CardLibrary = ({ toogle, typeFooter }: Props) => (
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
    {typeFooter && <i className="bi bi-plus-circle"></i>}
  </S.Card>
)

export default CardLibrary
