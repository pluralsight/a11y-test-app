import { getButtonProps } from '@pluralsight/headless-styles'
import { ReactNode } from 'react'
import Badge from '../Badge'
import Flex from '../Flex'
import Tooltip from '../Tooltip'
import styles from './Skill.module.css'

interface SkillProps {
  id: string
  icon: ReactNode
  label: string
  level?: string
  buttonLabel: string
}

const skillButtonProps = getButtonProps({
  sentiment: 'action',
  usage: 'filled',
  size: 'm',
}).button

export default function Skill(props: SkillProps) {
  return (
    <div id={props.id} className={styles.skill}>
      <Flex align="center" justify="space-between">
        <div className={styles.skillIcon}>{props.icon}</div>
        <div className={styles.skillContent}>
          <Tooltip
            id={`${props.id}-tooltip`}
            position="top"
            label={props.label}
            wrapperStyle={{ maxWidth: '100%' }}
          >
            <a href="/" className={styles.skillLabel}>
              <strong>{props.label}</strong>
            </a>
          </Tooltip>
          {props.level && (
            <div>
              <Badge usage="outline">{props.level}</Badge>
            </div>
          )}
        </div>
        <div className={styles.skillButton}>
          <button {...skillButtonProps}>{props.buttonLabel}</button>
        </div>
      </Flex>
    </div>
  )
}
