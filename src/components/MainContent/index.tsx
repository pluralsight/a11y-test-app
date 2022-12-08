import { getGridItemProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import HistoryCard from '../HistoryCard'
import TechFoundationsCard from '../TechFoundationsCard'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div {...getGridItemProps({ colSpan: 7 })}>
      <HistoryCard />
      <TechFoundationsCard />
    </div>
  )
}
