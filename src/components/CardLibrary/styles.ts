import styled from 'styled-components'
import { colors } from '../../styles'

type CardProps = {
  $toogle?: boolean
}

export const Card = styled.div<CardProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$toogle ? 'flex-start' : 'center')};
  padding: 5px;
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
    margin-left: 16px;
    h3 {
      font-size: 14px;
      margin-bottom: 4px;
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
