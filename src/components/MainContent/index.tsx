import { getGridItemProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import HistoryCard from '../HistoryCard'
import TechFoundationsCard from '../TechFoundationsCard'
import styles from './MainContent.module.css'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div {...getGridItemProps({ colSpan: 7 })}>
      <div className={styles.mainContent}>
      <HistoryCard />
      <TechFoundationsCard />
      </div>
    </div>
  )
}
