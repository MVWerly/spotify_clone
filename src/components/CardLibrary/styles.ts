import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;

  &:hover {
    background-color: ${colors.backgroundElevatedHighlight};
  }

  div:first-of-type {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    margin-right: 16px;
    background: rgb(28, 25, 68);
    background: linear-gradient(
      94deg,
      rgba(28, 25, 68, 1) 8%,
      rgba(85, 17, 121, 1) 48%,
      rgba(95, 69, 186, 0.9887604700083158) 83%
    );

    i {
      color: ${colors.textBase};
    }
  }

  div:nth-of-type(2) {
    h3 {
      font-size: 16px;
      margin-bottom: 8px;
      color: ${colors.textBase};
    }

    span {
      font-size: 14px;
      color: ${colors.textSubdued};
    }

    i {
      color: ${colors.profileColor};
      margin-right: 8px;
    }
  }
`
