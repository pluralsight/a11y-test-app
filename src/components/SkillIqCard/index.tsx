import { getButtonProps } from '@pluralsight/headless-styles'
import { ReactNode } from 'react'
import Badge from '../Badge'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import styles from './SkillIqCard.module.css'

const retakeButtonProps = getButtonProps({
  sentiment: 'action',
  usage: 'filled',
  size: 'm',
}).button

export default function SkillIqCard() {
  return (
    <Card>
      <CardHeader
        justify="space-between"
        linkHref="/"
        linkText="View all"
        linkIconText="assessments"
      >
        Skill IQ
      </CardHeader>
      <Skill
        icon={
          <img
            src="https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png"
            alt="React icon"
          />
        }
        label="Building Web Applications With React"
        level="expert"
      />
      <Skill
        icon={
          <img
            src="https://pluralsight2.imgix.net/paths/images/typescript-1169369a3e.png"
            alt="Typescript icon"
          />
        }
        label="Typescript Core Language"
        level="Proficient"
      />
      <Skill
        icon={
          <img
            src="https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png"
            alt="HTML5 icon"
          />
        }
        label="HTML5"
        level="Expert"
      />
    </Card>
  )
}

interface SkillProps {
  icon: ReactNode
  label: string
  level: string
}

function Skill(props: SkillProps) {
  return (
    <div className={styles.skill}>
      <Flex align="center" justify="space-between">
        <span className={styles.skillIcon}>{props.icon}</span>
        <span className={styles.skillContent}>
          <strong className={styles.skillLabel} title={props.label}>
            {props.label}
          </strong>
          <Badge usage="outline">{props.level}</Badge>
        </span>
        <button {...retakeButtonProps}>Retake</button>
      </Flex>
    </div>
  )
}
