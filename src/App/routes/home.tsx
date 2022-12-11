import { getGridItemProps } from '@pluralsight/headless-styles'
import Page from '../../components/Page'
import AsideContent from '../../components/AsideContent'
import MainContent from '../../pages/MainContent'

function Home() {
  const mainGridProps = getGridItemProps({ colSpan: 9 })
  const asideGridProps = getGridItemProps({ colSpan: 3 })
  const mainProps = {
    ...mainGridProps,
    style: {
      ...mainGridProps.style,
      minWidth: 0,
    },
  }
  const asideProps = {
    ...asideGridProps,
    style: {
      ...asideGridProps.style,
      minWidth: 0,
    },
  }

  return (
    <Page>
      <div {...mainProps}>
        <MainContent />
      </div>
      <div {...asideProps}>
        <AsideContent />
      </div>
    </Page>
  )
}

const homeRoute = {
  element: <Home />,
  path: '/',
}

export default homeRoute
