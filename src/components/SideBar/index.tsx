import { useState } from 'react'
import CardLibrary from '../CardLibrary'
import * as S from './styles'

const SideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <S.Aside $toggle={toggleMenu}>
      <S.Row $toggle={toggleMenu}>
        <S.Title onClick={() => setToggleMenu(!toggleMenu)}>
          <i className="bi bi-collection-play"></i>
          {toggleMenu && <h3>A tua Biblioteca</h3>}
        </S.Title>
        <S.ButtonContainer>
          {toggleMenu && (
            <>
              <button>
                <i className="bi bi-plus-lg"></i> Criar
              </button>
              <button>
                <i className="bi bi-arrow-right"></i>
              </button>
            </>
          )}
        </S.ButtonContainer>
      </S.Row>
      <S.Row
        $overflow={toggleMenu}
        $toggle={toggleMenu}
        $isFlex
        $marginTop="20px"
        $sidePadding={toggleMenu ? '0 10px' : '0 5px'}
      >
        <S.Row $toggle={toggleMenu}>
          {toggleMenu ? (
            <>
              <S.SearchContainer>
                <i className="bi bi-search"></i>
              </S.SearchContainer>
              <S.SearchContainer>
                <button>
                  Recentes <i className="bi bi-list"></i>
                </button>
              </S.SearchContainer>
            </>
          ) : (
            <>
              <S.SearchContainer>
                <i className="bi bi-plus-lg"></i>
              </S.SearchContainer>
            </>
          )}
        </S.Row>
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
        <CardLibrary toogle={toggleMenu} />
      </S.Row>
    </S.Aside>
  )
}

export default SideBar
