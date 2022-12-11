import { getGridItemProps, getGridProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import SearchResults from '../../components/SearchResults'

export default function MainContent(props: PropsWithChildren) {
  return (
    <div>
      <h1>Library</h1>
      <div {...getGridProps({ cols: 12, gap: 32 })}>
        {/* <SearchFilters /> */}
        <div {...getGridItemProps({ colSpan: 9 })}>
          <SearchResults />
        </div>
      </div>
    </div>
  )
}
