import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 8px 20px;
`
export const CardMusic = styled.div`
  display: flex;
  align-items: center;

  div:nth-of-type(1) {
    position: relative;

    &:hover {
      i {
        opacity: 1;
      }
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 6px;
    }

    i {
      position: absolute;
      top: -6px;
      right: 0;
      color: ${colors.backgroundElevatedHighlight};
      font-size: 32px;
      opacity: 0;

      &:hover {
        color: ${colors.backgroundElevatedBase};
      }
    }
  }

  div:nth-of-type(2) {
    margin: 0 16px;

    h3 {
      font-size: 14px;
      color: ${colors.textBase};
    }

    span {
      font-size: 12px;
    }

    h3,
    span {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  i {
    cursor: pointer;
    font-size: 16px;

    &:hover {
      color: ${colors.textBase};
    }
  }
`
export const DeviceContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-left: 12px;

    i {
      font-size: 16px;
      color: ${colors.textSubdued};
    }

    &:hover {
      transform: scale(1.1);

      i {
        color: ${colors.textBase};
      }
    }
  }
`
