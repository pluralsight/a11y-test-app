import { type ChangeEvent } from 'react'
import {
  getCheckboxProps,
  getFormControlProps,
  getIconProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'
import {
  type IconOptions,
  type CheckboxOptions,
} from '@pluralsight/headless-styles/types'

interface CheckProps {
  checked?: boolean
  iconOptions: IconOptions
  indeterminate: string
}

function Check(props: CheckProps) {
  const { checked } = props
  const icon = getIconProps(props.iconOptions)

  if (!checked) {
    return null
  }

  if (props.indeterminate === 'true') {
    return <IndeterminateIcon {...icon} />
  }

  return <CheckIcon {...icon} />
}

interface CheckboxProps extends CheckboxOptions {
  label: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Checkbox(props: CheckboxProps) {
  const { onChange, direction, ...checkboxProps } = props
  const { fieldOptions } = getFormControlProps({ ...checkboxProps })
  const checkbox = getCheckboxProps({ ...fieldOptions, ...checkboxProps })
  const { value, ...labelProps } = getFormLabelProps({
    ...props,
    htmlFor: props.id,
    value: props.label,
  })
  const { checked, ...inputProps } = checkbox.input

  return (
    <label {...checkbox.checkboxContainer}>
      {onChange && (
        <input {...inputProps} checked={checked} onChange={props.onChange} />
      )}
      {!onChange && <input {...inputProps} defaultChecked={checked} />}
      <span {...checkbox.checkboxControl}>
        <Check
          checked={checked}
          iconOptions={checkbox.iconOptions as IconOptions}
          indeterminate={checkbox.input.indeterminate}
        />
      </span>
      <span {...labelProps}>{value}</span>
    </label>
  )
}
