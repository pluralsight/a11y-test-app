import { PropsWithChildren } from 'react'
import BadgeCard from '../BadgeCard'
import InterestCard from '../InterestCard'
import RoleIqCard from '../RoleIqCard'
import SkillIqCard from '../SkillIqCard'
import WeeklyGoalCard from '../WeeklyGoalCard'
import sytles from './AsideContent.module.css'

export default function AsideContent(props: PropsWithChildren) {
  return (
    <div className={sytles.asideContent}>
      <RoleIqCard />
      <WeeklyGoalCard />
      <BadgeCard />
      <SkillIqCard />
      <InterestCard />
    </div>
  )
}
