import { useDispatch, useSelector } from 'react-redux'

import CardLibrary from '../CardLibrary'

import { RootReducer } from '../../store'
import { toggle } from '../../store/reducers/menu'

import * as S from './styles'

const SideBar = () => {
  const { menus } = useSelector((state: RootReducer) => state.menu)
  const dispatch = useDispatch()

  const menu1 = menus.menu1

  const toggleMenu = (id: string) => {
    dispatch(toggle(id))
  }

  return (
    <S.Aside $toggle={menu1}>
      <S.Row $toggle={menu1}>
        <S.Title>
          <button
            id="menu1"
            onClick={({ currentTarget }) => toggleMenu(currentTarget.id)}
          >
            <i className="bi bi-collection-play"></i>
            {menu1 && <h3>A tua Biblioteca</h3>}
          </button>
        </S.Title>
        <S.ButtonContainer>
          {menu1 && (
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
        $overflow={menu1}
        $toggle={menu1}
        $isFlex
        $marginTop={menu1 ? '20px' : '10px'}
        $sidePadding={menu1 ? '0 10px' : '0 5px'}
      >
        <S.SearchContainer $toggle={menu1}>
          {menu1 ? (
            <>
              <S.Search>
                <i className="bi bi-search"></i>
              </S.Search>
              <S.Search>
                <button>
                  Recentes <i className="bi bi-list"></i>
                </button>
              </S.Search>
            </>
          ) : (
            <>
              <S.Search>
                <i className="bi bi-plus-lg"></i>
              </S.Search>
            </>
          )}
        </S.SearchContainer>
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
        <CardLibrary toogle={menu1} />
      </S.Row>
    </S.Aside>
  )
}

export default SideBar
