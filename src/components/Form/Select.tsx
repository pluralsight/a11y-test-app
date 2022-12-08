import {
  getFormControlProps,
  getSelectProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import {
  type SelectOptions,
  type IconOptions,
} from '@pluralsight/headless-styles/types'
import { ChevronDownIcon } from '@pluralsight/icons'
import { type ChangeEvent } from 'react'
import ErrorMessage from '../Form/ErrorMessage'
import HelpMessage from '../Form/HelpMessage'
import Label from '../Form/Label'

type OptionLabel = string
type OptionValue = string

interface SelectProps extends SelectOptions {
  errorMessage?: string
  helpText?: string
  label: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: Record<OptionValue, OptionLabel>
  placeholder?: string
}

function Select(props: SelectProps) {
  const { fieldOptions } = getFormControlProps({
    invalid: props.invalid,
    disabled: props.disabled,
    required: props.required,
  })
  const selectProps = getSelectProps({
    ...fieldOptions,
    id: props.id,
    name: props.name,
    size: props.size,
    value: props.value,
  })
  const iconProps = getIconProps(selectProps.iconOptions as IconOptions)

  return (
    <div {...selectProps.fieldWrapper}>
      <Label htmlFor={props.id} required={props.required} value={props.label} />
      <div {...selectProps.selectWrapper}>
        <select {...selectProps.select} onChange={props.onChange}>
          {props.placeholder && (
            <option hidden disabled selected value="">
              {props.placeholder}
            </option>
          )}
          {Object.keys(props.options).map((value) => (
            <option key={value} value={value}>
              {props.options[value]}
            </option>
          ))}
        </select>
        <span {...selectProps.iconWrapper}>
          <ChevronDownIcon {...iconProps} />
        </span>
      </div>
      {props.helpText && !fieldOptions.invalid && (
        <HelpMessage id={`${props.id}-helpMessage`} message={props.helpText} />
      )}
      {props.invalid && props.errorMessage && (
        <ErrorMessage
          id={`${props.id}-errorMessage`}
          invalid={props.invalid}
          message={props.errorMessage}
        />
      )}
    </div>
  )
}

export default Select
