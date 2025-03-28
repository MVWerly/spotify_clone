import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { toggle } from '../../store/reducers/menu'

const DetailsPanel = () => {
  const { menus } = useSelector((state: RootReducer) => state.menu)
  const dispatch = useDispatch()

  const menu2 = menus.menu2

  const toogleMenu = (id: string) => {
    dispatch(toggle(id))
  }

  return (
    <S.Aside $toggle={menu2}>
      <S.Header>
        <h2>Quem dizes que eu sou</h2>
        <div>
          <button>
            <i className="bi bi-three-dots"></i>
          </button>
          <button
            id="menu2"
            onClick={({ currentTarget }) => toogleMenu(currentTarget.id)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      </S.Header>
      <S.Row>
        <img src="https://placehold.co/388x388" />
      </S.Row>
      <S.Row>
        <S.CurrentInfo>
          <div>
            <h3>Oh quão lindo esse nome é</h3>
            <span>Hillsong em Português</span>
          </div>
          <div>
            <button className="show">
              <i className="bi bi-upload"></i>
            </button>
            <button>
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        </S.CurrentInfo>
      </S.Row>
      <S.Row>
        <S.InfosContainer>
          <h4>Perfil do artista</h4>
          <img src="https://placehold.co/80x80" />
          <h4>Hillsong em português</h4>
          <div>
            <span>249 211 ouvintes por mês</span>
            <button>Seguir</button>
          </div>
          <p>
            A Hillsong em Português está apaixonadamente comprometida em
            compartilhar a mensagem de fé, esperança e amor do evangelho por
            meio da música...
          </p>
        </S.InfosContainer>
      </S.Row>
      <S.Row>
        <S.InfosContainer>
          <div>
            <h4>Créditos</h4>
            <p>Mostrar tudo</p>
          </div>
          <div>
            <div>
              <h4>Hillsong em portugues</h4>
              <p>Artista principal</p>
            </div>
            <button>Seguir</button>
          </div>
          <div>
            <div>
              <h4>Ben fielding</h4>
              <span>Compositor, Letrista</span>
            </div>
          </div>
          <div>
            <div>
              <h4>Brooke Ligertwood</h4>
              <span>Compositor, Letrista</span>
            </div>
          </div>
        </S.InfosContainer>
      </S.Row>
    </S.Aside>
  )
}

export default DetailsPanel
