import { PropsWithChildren, useState } from 'react'
import HistoryCard from '../HistoryCard'
import TechFoundationsCard from '../TechFoundationsCard'
import GetStartedCard from '../GetStartedCard'
import styles from './MainContent.module.css'

export default function MainContent(props: PropsWithChildren) {
  const [showGetStarted, setShowGetStarted] = useState(true)

  function hideGetStarted() {
    setShowGetStarted(false)
  }

  return (
    <div className={styles.mainContent}>
      {showGetStarted && <GetStartedCard handleClose={hideGetStarted} />}
      <HistoryCard />
      <TechFoundationsCard />
    </div>
  )
}
