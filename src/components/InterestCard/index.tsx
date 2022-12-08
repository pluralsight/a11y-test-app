import { getButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { ChevronDownIcon } from '@pluralsight/icons'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Tag from '../Tag'
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
        <Tag href="/">GitHub</Tag>
        <Tag href="/">JavaScript</Tag>
        <Tag href="/">Digital accessiTag</Tag>
        <Tag href="/">SASS</Tag>
        <Tag href="/">Design system</Tag>
        <Tag href="/">React</Tag>
        <button {...moreButtonProps}>+12</button>
      </div>
      <button {...editButtonProps.button}>
        Edit interests{' '}
        <ChevronDownIcon {...getIconProps(editButtonProps.iconOptions)} />
      </button>
    </Card>
  )
}
