import { getIconProps } from '@pluralsight/headless-styles'
import { ChevronRightIcon } from '@pluralsight/icons'
import { PropsWithChildren } from 'react'
import Flex from '../Flex'
import TextLink from '../TextLink'
import styles from './CardHeader.module.css'

interface CardHeaderProps extends PropsWithChildren {
  justify?: 'space-between'
  linkText?: string
  linkIconText?: string
  linkHref?: string
}

export default function CardHeader(props: CardHeaderProps) {
  return (
    <header className={styles.header}>
      <Flex align="center" justify={props.justify}>
        <h2 className={styles.heading}>{props.children}</h2>
        {props.linkHref && (
          <TextLink href={props.linkHref}>
            <Flex align="center" justify="space-between">
              {props.linkText}{' '}
              <ChevronRightIcon
                {...getIconProps({
                  size: 's',
                  ariaLabel: props.linkIconText,
                  ariaHidden: !props.linkIconText,
                })}
              />
            </Flex>
          </TextLink>
        )}
      </Flex>
    </header>
  )
}
