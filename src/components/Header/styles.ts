import styled from 'styled-components'
import { colors } from '../../styles'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    border: none;
    border-radius: 50px;
    padding: 14px;
    background-color: ${colors.backgroundElevatedBase};
    transition: all 0.6s ease-in-out;

    &:hover {
      transform: scale(1.1);

      i {
        color: ${colors.textBase};
      }
    }

    i {
      color: ${colors.textSubdued};
      font-size: 18px;
    }
  }

  h1 {
    margin: 0 30px;
    color: ${colors.textBase};
  }
`

export const IputContainer = styled.div`
  width: 472px;
  display: grid;
  grid-template-columns: 5% 85% 5%;
  background-color: ${colors.backgroundElevatedBase};
  padding: 10px;
  border-radius: 50px;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.6s ease-in-out;

  &:hover {
    background-color: ${colors.backgroundElevatedHighlight};
    border: 1px solid ${colors.textBase};

    input::placeholder {
      color: ${colors.textBase};
    }

    i {
      color: ${colors.textBase};
    }
  }

  input {
    margin-left: 10px;
    border: none;
    background-color: transparent;
    border-right: 1px solid ${colors.textSubdued};
    font-size: 16px;
    outline: none;
  }

  i {
    font-size: 24px;
    color: ${colors.textSubdued};
  }

  :nth-child(3) {
    margin-left: 15px;
  }
`

export const ProfileContainer = styled.div`
  margin-right: 144px;

  button {
    padding: 8px 10px;
    border-radius: 50px;
    font-weight: bold;
    border: none;
  }

  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    &:hover {
      transform: scale(1.1);
      color: ${colors.textBase};
    }
  }

  :nth-child(1) {
    margin-right: 10px;
    transition: all 0.6s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  :nth-child(2) {
    margin-right: 18px;
    color: ${colors.textSubdued};
    background-color: transparent;
    transition: all 0.6s ease-in-out;
  }

  :nth-child(3) {
    color: ${colors.textSubdued};
    margin-right: 12px;
    transition: all 0.6s ease-in-out;
    background-color: transparent;

    i {
      font-size: 16px;
    }
  }

  :nth-child(4) {
    font-size: 16px;
    background-color: ${colors.profileColor};
    color: ${colors.textSubdued};
    border: 6px solid rgba(0, 0, 0, 0.6);
    transition: all 0.6s ease-in-out;
  }
`
