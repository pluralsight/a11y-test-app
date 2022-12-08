import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'
import AsideContent from '../components/AsideContent'
import { getGridProps } from '@pluralsight/headless-styles'
import HelpModal from '../components/HelpModal'

function App() {
  return (
    <div>
      <AppBar />
      <div {...getGridProps({ cols: 12, gap: 32 })}>
        <SideBar />
        <MainContent />
        <AsideContent />
      </div>
      <HelpModal />
    </div>
  )
}

export default App
