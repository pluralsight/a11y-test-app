import { getGridItemProps } from '@pluralsight/headless-styles'
import { PropsWithChildren } from 'react'
import BadgeCard from '../BadgeCard'
import InterestCard from '../InterestCard'
import RoleIqCard from '../RoleIqCard'
import SkillIqCard from '../SkillIqCard'
import WeeklyGoalCard from '../WeeklyGoalCard'
import styles from './AsideContent.module.css'

export default function AsideContent(props: PropsWithChildren) {
  return (
    <div {...getGridItemProps({ colSpan: 3 })}>
      <div className={styles.asideContent}>
        <RoleIqCard />
        <WeeklyGoalCard />
        <BadgeCard />
        <SkillIqCard />
        <InterestCard />
      </div>
    </div>
  )
}
