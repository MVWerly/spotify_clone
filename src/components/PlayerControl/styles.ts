import styled from 'styled-components'
import { colors } from '../../styles'

export const PlayerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin: 0 16px;

    i {
      color: ${colors.textSubdued};
    }
  }

  button:nth-of-type(1),
  button:nth-of-type(5) {
    i {
      font-size: 12px;
    }
  }

  button:nth-of-type(2),
  button:nth-of-type(4) {
    i {
      font-size: 24px;
    }
  }

  button:nth-of-type(3) {
    i {
      font-size: 32px;
      color: ${colors.textBase};
    }
  }

  button:nth-of-type(2):hover,
  button:nth-of-type(4):hover,
  button:nth-of-type(3):hover {
    transform: scale(1.1);

    i {
      color: ${colors.textBase};
    }
  }
`

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 4px;

  span {
    font-size: 12px;
  }
`
