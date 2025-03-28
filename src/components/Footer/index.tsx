import PlayerControl from '../PlayerControl'
import ProgressBar from '../ProgressBar'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.CardMusic>
      <div>
        <img src="https://placehold.co/56x56" />
        <i className="bi bi-caret-up-fill"></i>
        {/* <i className="bi bi-caret-down-fill"></i> */}
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
export default Footer
