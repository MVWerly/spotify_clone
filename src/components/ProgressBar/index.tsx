import * as S from './styles'

type Props = {
  barWidth: string
}

const ProgressBar = ({ barWidth }: Props) => (
  <S.BarContainer $barWidth={barWidth}>
    <S.Bar />
  </S.BarContainer>
)

export default ProgressBar
