import MainContent from '../MainContent'
import SideBar from '../SideBar'
import { Section } from './styles'

const LayoutWrapper = () => (
  <Section>
    <SideBar />
    <MainContent />
  </Section>
)

export default LayoutWrapper
