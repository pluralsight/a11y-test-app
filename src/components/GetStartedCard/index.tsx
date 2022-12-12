import { Link } from 'react-router-dom'
import {
  getButtonProps,
  getGridProps,
  getIconProps,
  getTextLinkProps,
} from '@pluralsight/headless-styles'
import { PlaceholderIcon } from '@pluralsight/icons'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import styles from './GetStartedCard.module.css'

interface GetStartedProps {
  handleClose: () => void
}

export default function GetStartedCard(props: GetStartedProps) {
  return (
    <div>
      <Flex align="center" justify="space-between">
        <CardHeader>Getting Started</CardHeader>
        <button
          {...getButtonProps({ usage: 'text', size: 'm' }).button}
          onClick={props.handleClose}
        >
          Dismiss
        </button>
      </Flex>
      <div {...getGridProps({ cols: 3, gap: 8 })}>
        <StartButton
          href="/"
          title="Skill up during lunch"
          description="Bite-sized courses"
          linkText="View Courses"
        />
        <StartButton
          href="/"
          title="Learn a skill end to end"
          description="Curated learning journeys"
          linkText="View Paths"
        />
        <StartButton
          href="/"
          title="Assess your skills"
          description="Know your strengths and gaps"
          linkText="View Skill IQ"
        />
      </div>
    </div>
  )
}

interface StartButtonProps {
  title: string
  description: string
  href: string
  linkText: string
}

function StartButton(props: StartButtonProps) {
  return (
    <Card>
      <div className={styles.startCard}>
        <Flex align="center">
          <span className={styles.startCardIcon}>
            <PlaceholderIcon
              {...getIconProps({ ariaHidden: true, customSize: '2em' })}
            />
          </span>
          <div className={styles.startCardText}>
            <span className={styles.startCardTitle}>{props.title}</span>
            <small className={styles.startCardDescription}>
              {props.description}
            </small>
          </div>
          <span className={styles.startCardLink}>
            <Link to="/" {...getTextLinkProps({ href: props.href }).link}>
              {props.linkText}
            </Link>
          </span>
        </Flex>
      </div>
    </Card>
  )
}
