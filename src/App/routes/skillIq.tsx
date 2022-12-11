import { getGridItemProps } from '@pluralsight/headless-styles'
import Page from '../../components/Page'
import SkillIqContent from '../../pages/SkillIqContent'

function SkillIq() {
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
        <SkillIqContent />
      </div>
    </Page>
  )
}

const skillIqRoute = {
  element: <SkillIq />,
  path: 'skilliq',
}

export default skillIqRoute
