import { type PropsWithChildren } from 'react'
import styles from './Flex.module.css'

interface Props {
  align?: string
  direction?: string
  justify?: string
}

export default function Flex(props: PropsWithChildren<Props>) {
  const align = `${props?.align}Align` ?? 'flex-start'
  const direction = props?.direction ?? 'row'
  const justify = props?.justify ?? 'flex-start'

  return (
    <div className={`${styles[align]} ${styles[direction]} ${styles[justify]}`}>
      {props.children}
    </div>
  )
}
