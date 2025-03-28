import styled from 'styled-components'
import { colors } from '../../styles'

type CardProps = {
  $typeCard?: 'artist'
}

export const Card = styled.div<CardProps>`
  margin-top: 8px;
  max-width: 200px;
  width: 100%;
  height: 264px;
  padding: 10px 10px 0 10px;
  border-radius: 8px;
  position: relative;

  &:hover {
    background-color: ${colors.backgroundElevatedHighlight};

    button {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 176px;
    height: 176px;
    display: block;
    border-radius: 8px;
    object-fit: cover;
    border-radius: ${(props) => (props.$typeCard ? '50%' : '')};
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.textBase};
    margin: 6px 0;
  }

  button {
    cursor: pointer;
    border: none;
    position: absolute;
    bottom: 80px;
    right: 20px;
    background-color: transparent;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;

    i {
      color: ${colors.profileColor};
      font-size: 48px;
    }
  }
`
