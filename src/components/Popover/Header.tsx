import { type PropsWithChildren } from 'react'
import { type PopoverReturn } from './types'

interface HeaderProps
  extends PropsWithChildren,
    Pick<PopoverReturn['header'], keyof PopoverReturn['header']> {}

export default function Header(props: HeaderProps) {
  const { children, ...popoverProps } = props
  return <header {...popoverProps}>{children}</header>
}
