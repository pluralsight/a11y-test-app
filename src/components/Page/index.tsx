import { type PropsWithChildren } from 'react'
import AppBar from '../AppBar'
import SideBar from '../SideBar'
import Footer from '../Footer'
import MainContentRegion from '../MainContentRegion'
import styles from './Page.module.css'

export default function Page(props: PropsWithChildren) {
  return (
    <article className={styles.app}>
      <div className={styles.header}>
        <AppBar />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <main className={styles.main}>
        <MainContentRegion>{props.children}</MainContentRegion>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </article>
  )
}
