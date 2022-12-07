import { PropsWithChildren } from 'react'
import GetStartedCard from '../GetStartedCard'
import styles from './MainContent.module.css'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div className={styles.mainContent}>
      <GetStartedCard />
    </div>
  )
}
