import CardLibrary from '../CardLibrary'
import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <S.Row>
      <S.Title>
        <i className="bi bi-collection-play"></i>
        <h3>A tua Biblioteca</h3>
      </S.Title>
      <S.ButtonContainer>
        <button>
          <i className="bi bi-plus-lg"></i> Criar
        </button>
        <button>
          <i className="bi bi-arrow-right"></i>
        </button>
      </S.ButtonContainer>
    </S.Row>
    <S.Row $marginTop="40px">
      <S.SearchContainer>
        <i className="bi bi-search"></i>
      </S.SearchContainer>
      <S.SearchContainer>
        <button>
          Recentes <i className="bi bi-list"></i>
        </button>
      </S.SearchContainer>
    </S.Row>
    <S.Row $isFlex $marginTop="20px" $sidePadding="0 20px">
      <CardLibrary />
      <CardLibrary />
      <CardLibrary />
      <CardLibrary />
      <CardLibrary />
      <CardLibrary />
    </S.Row>
  </S.Aside>
)

export default SideBar
