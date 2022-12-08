import { getProgressProps } from '@pluralsight/headless-styles'
import { type ProgressOptions } from '@pluralsight/headless-styles/types'

interface ProgressProps extends ProgressOptions {
  label: string
}

export default function Progress(props: ProgressProps) {
  const { label, ...progressOptions } = props
  const progressProps = getProgressProps(progressOptions)

  return (
    <div {...progressProps.wrapper}>
      <div {...progressProps.bar} aria-label={label} />
    </div>
  )
}
