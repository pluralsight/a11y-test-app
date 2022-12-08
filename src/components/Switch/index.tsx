import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type MouseEvent,
} from 'react'
import { getSwitchProps } from '@pluralsight/headless-styles'
import { type SwitchOptions } from '@pluralsight/headless-styles/types'

interface SwitchProps extends SwitchOptions {
  onClick: (event: MouseEvent) => void
}

function Switch(props: SwitchProps) {
  const switchProps = getSwitchProps(props)
  return (
    <label {...switchProps.switchContainer}>
      <input {...switchProps.input} onClick={props.onClick} />
      <span
        {...(switchProps.switchTrack as DetailedHTMLProps<
          HTMLAttributes<HTMLSpanElement>,
          HTMLSpanElement
        >)}
      >
        <span {...switchProps.switchThumb} />
      </span>
    </label>
  )
}

export default Switch
