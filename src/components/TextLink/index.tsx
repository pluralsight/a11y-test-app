import { getTextLinkProps } from '@pluralsight/headless-styles'
import { type TextLinkOptions } from '@pluralsight/headless-styles/types'
import { PropsWithChildren } from 'react'

interface TextLinkProps extends TextLinkOptions, PropsWithChildren {}

export default function TextLink(props: TextLinkProps) {
  const { children, ...textLinkOptions } = props
  const textLinkProps = getTextLinkProps(textLinkOptions)

  return <a {...textLinkProps.link}>{children}</a>
}
