import styled from 'styled-components'
import { colors } from '../../styles'

type RowProps = {
  $marginTop?: string
  $sidePadding?: string
  $isFlex?: boolean
  $toggle: true | false
  $overflow?: boolean
}

type AsideProps = {
  $toggle: true | false
}

export const Aside = styled.aside<AsideProps>`
  padding: 20px 0;
  max-width: 420px;
  width: ${(props) => (props.$toggle ? '420px' : '72px')};
  height: 592px;
  background-color: ${colors.backgroundBase};
  border-radius: 10px;
`

export const Row = styled.div<RowProps>`
  max-height: 520px;
  width: ${(props) => (props.$toggle ? '420px' : '72px')};
  padding: ${(props) => (props.$sidePadding ? props.$sidePadding : '0 20px')};
  margin-top: ${(props) => props.$marginTop};
  display: ${(porps) => (porps.$isFlex ? 'block' : 'flex')};
  justify-content: space-between;

  overflow-x: hidden;
  overflow-y: ${(props) => (props.$overflow ? 'auto' : 'hidden')};
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 10px;
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

export const Title = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin-left: 6px;

  &:hover {
    color: ${colors.textBase};
  }

  i {
    font-size: 24px;
  }

  h3 {
    font-size: 16px;
    margin-left: 15px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    display: flex;
    background-color: ${colors.backgroundElevatedBase};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 4px 12px;
    color: ${colors.textBase};
    border: none;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${colors.backgroundElevatedHighlight};

      i {
        color: ${colors.textBase};
      }
    }

    i {
      font-size: 20px;
      color: ${colors.textSubdued};
    }
  }

  button:first-of-type {
    i {
      margin-right: 8px;
    }
  }

  button:nth-of-type(2) {
    background-color: ${colors.backgroundBase};
    margin-left: 10px;

    &:hover {
      background-color: ${colors.backgroundElevatedHighlight};
    }
  }
`

export const SearchContainer = styled.div`
  margin: 20px 0;

  > i {
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${colors.backgroundElevatedHighlight};
      color: ${colors.textBase};
    }
  }

  i {
    font-size: 16px;
    color: ${colors.textSubdued};
  }

  button {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: ${colors.textSubdued};
    border: none;
    transition: all 0.3s ease-in-out;

    i {
      margin-left: 8px;
    }

    &:hover {
      transform: scale(1.1);
      color: ${colors.textBase};

      i {
        color: ${colors.textBase};
      }
    }
  }
`
