import { PropsWithChildren, ReactNode } from 'react'
import { getTagProps } from '@pluralsight/headless-styles'
import { type TagOptions } from '@pluralsight/headless-styles/types'

interface TagProps extends PropsWithChildren, TagOptions {
  href: string
  icon?: ReactNode
}

export default function Tag(props: TagProps) {
  const { children, icon, href, ...tagOptions } = props
  const tagProps = getTagProps(tagOptions)

  return (
    <a href={href} {...tagProps.tag}>
      {children}
    </a>
  )
}
