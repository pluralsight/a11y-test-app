import { type PropsWithChildren } from 'react'
import { type PopoverReturn } from './types'

interface BodyProps
  extends PropsWithChildren,
    Pick<PopoverReturn['body'], keyof PopoverReturn['body']> {}

export default function Body(props: BodyProps) {
  const { children, ...popoverProps } = props

  return <div {...popoverProps}>{children}</div>
}
