import { getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'
import Card from '../Card'
import Flex from '../Flex'
import VideoLink from '../VideoLink'
import TextLink from '../TextLink'
import styles from './GetStartedCard.module.css'

const iconProps = getIconProps({
  size: 's',
  ariaLabel: 'history',
})

export default function GetStartedCard() {
  return (
    <Card>
      <header className={styles.header}>
        <Flex align="center">
          <h2 className={styles.heading}>Get started</h2>
          <TextLink href="/">
            <Flex align="center" justify="space-between">
              View all <ChevronRightIcon {...iconProps} />
            </Flex>
          </TextLink>
        </Flex>
      </header>
      <Flex justify="space-between">
        <VideoLink />
        <VideoLink />
        <VideoLink />
      </Flex>
    </Card>
  )
}
