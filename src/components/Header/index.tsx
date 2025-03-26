import * as S from './styles'

const Header = () => (
  <S.Header>
    <S.SearchContainer>
      <h1>
        <i className="bi bi-spotify"></i>
      </h1>
      <button>
        <i className="bi bi-house"></i>
      </button>
      <S.IputContainer>
        <i className="bi bi-search"></i>
        <input type="text" placeholder="O que queres reproduzir?" />
        <i className="bi bi-disc"></i>
      </S.IputContainer>
    </S.SearchContainer>
    <S.ProfileContainer>
      <button>Explorar o Premium</button>
      <button>
        <i className="bi bi-download"></i> Instalar app
      </button>
      <button>
        <i className="bi bi-bell"></i>
      </button>
      <button>M</button>
    </S.ProfileContainer>
  </S.Header>
)

export default Header
