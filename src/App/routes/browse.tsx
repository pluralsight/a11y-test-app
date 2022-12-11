import { getGridItemProps } from '@pluralsight/headless-styles'
import Page from '../../components/Page'
import BrowseContent from '../../pages/BrowseContent'

function Browse() {
  const mainGridProps = getGridItemProps({ colSpan: 12 })
  const mainProps = {
    ...mainGridProps,
    style: {
      ...mainGridProps.style,
      minWidth: 0,
    },
  }

  return (
    <Page>
      <div {...mainProps}>
        <BrowseContent />
      </div>
    </Page>
  )
}

const browseRoute = {
  element: <Browse />,
  path: 'browse',
}

export default browseRoute
