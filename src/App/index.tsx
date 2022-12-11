import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import AppBar from '../components/AppBar'
import SideBar from '../components/SideBar'
import styles from './App.module.css'
import Footer from '../components/Footer'
import MainContentRegion from '../components/MainContentRegion'

function App() {
  return (
    <article className={styles.app}>
      <div className={styles.header}>
        <AppBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <main className={styles.main}>
        <MainContentRegion>
          <RouterProvider router={router} />
        </MainContentRegion>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </article>
  )
}

export default App
