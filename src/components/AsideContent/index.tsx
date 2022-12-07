import { getGridItemProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import BadgeCard from '../BadgeCard'
import InterestCard from '../InterestCard'
import RoleIqCard from '../RoleIqCard'
import SkillIqCard from '../SkillIqCard'
import WeeklyGoalCard from '../WeeklyGoalCard'

export default function AsideContent(props: PropsWithChildren) {
  return (
    <div {...getGridItemProps({ colSpan: 3 })}>
      <RoleIqCard />
      <WeeklyGoalCard />
      <BadgeCard />
      <SkillIqCard />
      <InterestCard />
    </div>
  )
}
