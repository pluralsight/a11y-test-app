import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'

function App() {
  return (
    <div>
      <AppBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
      </div>
    </div>
  )
}

export default App
