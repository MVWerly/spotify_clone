import styled from 'styled-components'
import { colors } from '../../styles'

type BarProps = {
  $barWidth: string
}

export const BarContainer = styled.div<BarProps>`
  width: ${(props) => props.$barWidth};
  height: 4px;
  background-color: ${colors.backgroundTintedBaseHighlight};
  margin: 0 8px;
`

export const Bar = styled.div`
  height: 100%;
  width: 40%;
  background-color: ${colors.textBase};
`
