import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'
import Badge from '../Badge'
import Card from '../Card'
import CardHeader from '../CardHeader'
import styles from './InterestCard.module.css'

const moreButtonProps = getButtonProps({
  sentiment: 'action',
  size: 'm',
}).button

const editButtonProps = getButtonProps({
  usage: 'text',
  size: 'm',
})

export default function InterestCard() {
  return (
    <Card>
      <CardHeader>Your Interests</CardHeader>
      <div className={styles.interestCloud}>
        <Badge sentiment="action">GitHub</Badge>
        <Badge sentiment="action">JavaScript</Badge>
        <Badge sentiment="action">Digital accessibility</Badge>
        <Badge sentiment="action">SASS</Badge>
        <Badge sentiment="action">Design system</Badge>
        <Badge sentiment="action">React</Badge>
        <button {...moreButtonProps}>+12</button>
      </div>
      <button {...editButtonProps.button}>
        Edit interests{' '}
        <ChevronDownIcon {...getIconProps(editButtonProps.iconOptions)} />
      </button>
    </Card>
  )
}
