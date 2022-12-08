import { getButtonProps } from '@pluralsight/headless-styles'
import { ReactNode } from 'react'
import Badge from '../Badge'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import PreloadedImg from '../PreloadImg'
import Tooltip from '../Tooltip'
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
        id="react-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
            src="https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png"
            alt="React icon"
          />
        }
        label="Building Web Applications With React"
        level="expert"
      />
      <Skill
        id="typescript-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
            src="https://pluralsight2.imgix.net/paths/images/typescript-1169369a3e.png"
            alt="Typescript icon"
          />
        }
        label="Typescript Core Language"
        level="Proficient"
      />
      <Skill
        id="html5-skill-iq"
        icon={
          <PreloadedImg
            width={50}
            height={50}
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
  id: string
  icon: ReactNode
  label: string
  level: string
}

function Skill(props: SkillProps) {
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
          <div>
            <Badge usage="outline">{props.level}</Badge>
          </div>
        </div>
        <div className={styles.skillButton}>
          <button {...retakeButtonProps}>Retake</button>
        </div>
      </Flex>
    </div>
  )
}
