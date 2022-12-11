import { type PropsWithChildren } from 'react'
import { getGridProps } from '@pluralsight/headless-styles'

export default function MainContentRegion(props: PropsWithChildren) {
  return <div {...getGridProps({ cols: 12, gap: 32 })}>{props.children}</div>
}
