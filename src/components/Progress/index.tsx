import { getProgressProps } from '@pluralsight/headless-styles'
import { type ProgressOptions } from '@pluralsight/headless-styles/types'

export default function Progress(props: ProgressOptions) {
  const progressProps = getProgressProps(props)

  return (
    <div {...progressProps.wrapper}>
      <div {...progressProps.bar} />
    </div>
  )
}
