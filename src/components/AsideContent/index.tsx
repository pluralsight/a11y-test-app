import { PropsWithChildren } from 'react'
import BadgeCard from '../BadgeCard'
import RoleIqCard from '../RoleIqCard'
import WeeklyGoalCard from '../WeeklyGoalCard'
import sytles from './AsideContent.module.css'

export default function AsideContent(props: PropsWithChildren) {
  return (
    <div className={sytles.asideContent}>
      <RoleIqCard />
      <WeeklyGoalCard />
      <BadgeCard />
    </div>
  )
}
