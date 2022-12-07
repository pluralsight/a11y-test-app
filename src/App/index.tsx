import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'
import AsideContent from '../components/AsideContent'
import Flex from '../components/Flex'

function App() {
  return (
    <div>
      <AppBar />
      <Flex>
        <SideBar />
        <MainContent />
        <AsideContent />
      </Flex>
    </div>
  )
}

export default App
