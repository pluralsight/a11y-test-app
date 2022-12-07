import { getGridItemProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import HistoryCard from '../HistoryCard'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div {...getGridItemProps({ colSpan: 7 })}>
      <HistoryCard />
    </div>
  )
}
