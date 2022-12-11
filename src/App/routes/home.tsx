import { getGridItemProps } from '@pluralsight/headless-styles'
import AsideContent from '../../components/AsideContent'
import MainContent from '../../components/MainContent'

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
    <>
      <div {...mainProps}>
        <MainContent />
      </div>
      <div {...asideProps}>
        <AsideContent />
      </div>
    </>
  )
}

const homeRoute = {
  element: <Home />,
  path: '/',
}

export default homeRoute
