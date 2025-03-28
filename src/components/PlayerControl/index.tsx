import ProgressBar from '../ProgressBar'
import * as S from './styles'

const PlayerControl = () => (
  <div>
    <S.PlayerButtons>
      <button>
        <i className="bi bi-shuffle"></i>
      </button>
      <button>
        <i className="bi bi-skip-start-fill"></i>
      </button>
      <button>
        <i className="bi bi-play-circle-fill"></i>
      </button>
      <button>
        <i className="bi bi-skip-end-fill"></i>
      </button>
      <button>
        <i className="bi bi-repeat"></i>
      </button>
    </S.PlayerButtons>
    <S.ProgressContainer>
      <span>1:37</span>
      <ProgressBar barWidth="512px" />
      <span>4:32</span>
    </S.ProgressContainer>
  </div>
)

export default PlayerControl
