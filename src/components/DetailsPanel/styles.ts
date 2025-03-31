import styled from 'styled-components'
import { colors } from '../../styles'

type AsideProps = {
  $toggle: boolean
}

export const Aside = styled.div<AsideProps>`
  display: ${(props) => (props.$toggle ? 'block' : 'none')};
  position: relative;
  max-width: 420px;
  width: 100%;
  height: 80vh;
  background-color: ${colors.backgroundBase};
  padding-left: 16px;
  padding-bottom: 16px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${colors.scrollBase};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${colors.scrollHighlight};
    }
  }
`

export const Header = styled.div`
  background-color: ${colors.backgroundBase};
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  h2 {
    font-size: 16px;
    color: ${colors.textBase};

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      /* margin-left: 16px; */
      border-radius: 50%;
      padding: 8px;

      i {
        color: ${colors.textSubdued};
        font-size: 16px;
      }

      &:hover {
        background-color: ${colors.backgroundElevatedBase};

        i {
          color: ${colors.textBase};
        }
      }
    }
  }
`

export const Row = styled.div`
  margin-top: 16px;

  > img {
    border-radius: 8px;
    width: 388px;
    height: 388px;
  }
`

export const CurrentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    div:nth-of-type(2) {
      button:first-of-type {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  div:nth-of-type(1) {
    h3 {
      font-size: 24px;
      color: ${colors.textBase};

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      font-size: 16px;
      margin-top: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  div:nth-of-type(2) {
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      &:hover {
        i {
          color: ${colors.textBase};
        }
      }

      i {
        font-size: 24px;
        margin-left: 12px;
        color: ${colors.textSubdued};
      }
    }

    button:first-of-type {
      opacity: 0;
      transform: translateX(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundElevatedBase};
  padding: 16px;
  border-radius: 10px;

  h4 {
    color: ${colors.textBase};
  }

  h4,
  span {
    font-size: 16px;
    font-weight: bold;
  }

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;

    button {
      padding: 8px 16px;
      border-radius: 50px;
      border: 1px solid ${colors.textBase};
      background-color: ${colors.backgroundElevatedBase};
      color: ${colors.textBase};
      font-weight: bold;
      cursor: pointer;
    }
  }
`
