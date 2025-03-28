import DetailsPanel from '../DetailsPanel'
import MainContent from '../MainContent'
import SideBar from '../SideBar'
import { Section } from './styles'

const LayoutWrapper = () => (
  <Section>
    <SideBar />
    <MainContent />
    <DetailsPanel />
  </Section>
)

export default LayoutWrapper
