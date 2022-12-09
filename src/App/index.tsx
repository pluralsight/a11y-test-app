import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import MainContentRegion from '../components/MainContentRegion'
import styles from './App.module.css'
import Footer from '../components/Footer'

function App() {
  return (
    <article className={styles.app}>
      <div className={styles.header}>
        <AppBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        <MainContentRegion />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </article>
  )
}

export default App
