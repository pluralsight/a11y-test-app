import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import Flex from '../components/Flex'
import MainContentRegion from '../components/MainContentRegion'

function App() {
  return (
    <div>
      <AppBar />
      <Flex>
        <SideBar />
        <MainContentRegion />
      </Flex>
    </div>
  )
}

export default App
