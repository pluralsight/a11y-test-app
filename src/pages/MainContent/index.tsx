import { PropsWithChildren, useState } from 'react'
import HistoryCard from '../../components/HistoryCard'
import TechFoundationsCard from '../../components/TechFoundationsCard'
import GetStartedCard from '../../components/GetStartedCard'
import styles from './MainContent.module.css'
import Admonition from '../../components/Admonition'

export default function MainContent(props: PropsWithChildren) {
  const [showGetStarted, setShowGetStarted] = useState(true)

  function hideGetStarted() {
    setShowGetStarted(false)
  }

  return (
    <div className={styles.mainContent}>
      <Admonition
        title={'Scheduled maintenance'}
        description={
          'We are currently undergoing scheduled maintenance. During this time you may experience brief interruptions.  We apologize for any inconvenience.'
        }
        showButton={true}
      />
      <h1 className="psds-screenreader-only">Pluralsight Skills Home</h1>
      {showGetStarted && <GetStartedCard handleClose={hideGetStarted} />}
      <HistoryCard />
      <TechFoundationsCard />
    </div>
  )
}
