import { PropsWithChildren, useState } from 'react'
import HistoryCard from '../../components/HistoryCard'
import TechFoundationsCard from '../../components/TechFoundationsCard'
import GetStartedCard from '../../components/GetStartedCard'
import styles from './MainContent.module.css'

export default function MainContent(props: PropsWithChildren) {
  const [showGetStarted, setShowGetStarted] = useState(true)

  function hideGetStarted() {
    setShowGetStarted(false)
  }

  return (
    <div className={styles.mainContent}>
      <h1 className="psds-screenreader-only">Pluralsight Skills Home</h1>
      {showGetStarted && <GetStartedCard handleClose={hideGetStarted} />}
      <HistoryCard />
      <TechFoundationsCard />
    </div>
  )
}
