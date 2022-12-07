import { PropsWithChildren } from 'react'
import HistoryCard from '../HistoryCard'
import styles from './MainContent.module.css'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div className={styles.mainContent}>
      <HistoryCard />
    </div>
  )
}
