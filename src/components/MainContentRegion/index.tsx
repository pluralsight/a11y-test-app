import { getGridItemProps, getGridProps } from '@pluralsight/headless-styles'
import AsideContent from '../AsideContent'
import MainContent from '../MainContent'

export default function MainContentRegion() {
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
    <div {...getGridProps({ cols: 12, gap: 32 })}>
      <div {...mainProps}>
        <MainContent />
      </div>
      <div {...asideProps}>
        <AsideContent />
      </div>
    </div>
  )
}
