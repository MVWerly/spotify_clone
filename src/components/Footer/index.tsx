import { useDispatch, useSelector } from 'react-redux'

import PlayerControl from '../PlayerControl'
import ProgressBar from '../ProgressBar'

import * as S from './styles'
import { toggle } from '../../store/reducers/menu'
import { RootReducer } from '../../store'
import { useGetTopTracksQuery } from '../../services/api'

const Footer = () => {
  const { menus } = useSelector((state: RootReducer) => state.menu)
  const { data } = useGetTopTracksQuery()
  const dispatch = useDispatch()

  const menu2 = menus.menu2

  const toggleMenu = (id: string) => {
    dispatch(toggle(id))
  }

  console.log(data)
  return (
    <S.FooterContainer>
      <S.CardMusic>
        <div>
          <img src="https://placehold.co/56x56" />
          <button
            id="menu2"
            onClick={({ currentTarget }) => toggleMenu(currentTarget.id)}
          >
            {menu2 ? (
              <i className="bi bi-caret-down-fill"></i>
            ) : (
              <i className="bi bi-caret-up-fill"></i>
            )}
          </button>
        </div>
        <div>
          <h3>Oh quão lindo esse nome É</h3>
          <span>Album</span>
        </div>
        <i className="bi bi-plus-circle"></i>
      </S.CardMusic>
      <PlayerControl />
      <S.DeviceContainer>
        <button>
          <i className="bi bi-play-btn"></i>
        </button>
        <button>
          <i className="bi bi-mic"></i>
        </button>
        <button>
          <i className="bi bi-view-list"></i>
        </button>
        <button>
          <i className="bi bi-speaker"></i>
        </button>
        <button>
          <i className="bi bi-volume-up"></i>
        </button>
        <ProgressBar barWidth="93px" />
        <button>
          <i className="bi bi-window-fullscreen"></i>
        </button>
        <button>
          <i className="bi bi-arrows-angle-expand"></i>
        </button>
      </S.DeviceContainer>
    </S.FooterContainer>
  )
}

export default Footer
