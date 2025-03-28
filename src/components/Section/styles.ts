import styled from 'styled-components'
import { colors } from '../../styles'

const ButtonScroll = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  position: absolute;
  font-size: 40px;
  z-index: 1;
  opacity: 0;

  i {
    color: ${colors.backgroundElevatedHighlight};
  }

  &:hover {
    i {
      color: ${colors.backgroundElevatedBase};
    }
  }
`

export const ButtonLeft = styled(ButtonScroll)`
  top: 50%;
  left: 40px;
  transform: translateX(-20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`

export const ButtonRight = styled(ButtonScroll)`
  right: 30px;
  top: 50%;
  transform: translateX(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`

export const SectionContainer = styled.section`
  margin-top: 40px;
  position: relative;
  transition: all 0.5s ease-in-out;

  div:nth-of-type(2) {
    &:hover {
      ${ButtonScroll} {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 40px;

  h2 {
    cursor: pointer;
    color: ${colors.textBase};
    font-size: 24px;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const CardContainer = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  padding: 0 40px;

  > * {
    flex-shrink: 0;
  }
`
