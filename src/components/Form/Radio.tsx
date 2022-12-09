import { getFormLabelProps, getRadioProps } from '@pluralsight/headless-styles'
import { type RadioOptions } from '@pluralsight/headless-styles/types'
import { type ChangeEvent } from 'react'

interface RadioProps extends RadioOptions {
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Radio(props: RadioProps) {
  const { onChange, direction, ...radioOptions } = props
  const radioProps = getRadioProps(radioOptions)
  const { value, ...labelProps } = getFormLabelProps({
    ...radioOptions,
    htmlFor: radioOptions.id,
    value: props.label,
  })

  return (
    <label {...radioProps.radioContainer}>
      <input {...radioProps.input} onChange={props.onChange} />
      <span {...radioProps.radioControl} />
      <span {...labelProps}>{value}</span>
    </label>
  )
}
