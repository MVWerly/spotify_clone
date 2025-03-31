import styled from 'styled-components'
import { colors } from '../../styles'

export const Main = styled.main`
  position: relative;
  max-width: 100%;
  overflow-y: auto;
  width: 100%;
  border-radius: 10px;
  height: 80vh;
  background: rgb(31, 31, 31);
  background: linear-gradient(
    180deg,
    rgba(31, 31, 31, 1) 20%,
    rgba(31, 31, 31, 1) 34%,
    rgba(18, 18, 18, 1) 49%
  );

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

export const TabContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${colors.backgroundElevatedBase};

  button {
    color: ${colors.textBase};
    background-color: ${colors.backgroundTintedBase};
    border: none;
    border-radius: 50px;
    padding: 8px 13px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;

    &:hover {
      background-color: ${colors.backgroundTintedBaseHighlight};
    }

    &.is-active {
      background-color: ${colors.textBase};
      color: ${colors.backgroundBase};
    }
  }
`
