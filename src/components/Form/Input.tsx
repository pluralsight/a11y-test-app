import { type ChangeEvent } from 'react'
import { CalendarIcon, WarningTriangleFilledIcon } from '@pluralsight/icons'
import {
  getFormControlProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import {
  type IconOptions,
  type InputOptions,
} from '@pluralsight/headless-styles/types'
import Label from './Label'
import HelpMessage from './HelpMessage'
import ErrorMessage from './ErrorMessage'

interface InputProps extends InputOptions {
  defaultValue?: string
  errorMessage?: string
  helpText?: string
  label: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function InputField(props: InputProps) {
  const { onChange, kind, ...options } = props
  const { fieldOptions } = getFormControlProps(options)
  const helpId = props.helpText ? `${props.id}-helpMessage` : null
  const errorId =
    fieldOptions.invalid && props.errorMessage
      ? `${props.id}-errorMessage`
      : null
  const inputProps = getInputProps({
    kind,
    ...options,
    ...fieldOptions,
    describedBy: getDescribedBy(helpId, errorId),
  })
  const { value, ...input } = inputProps.input

  return (
    <div {...inputProps.inputWrapper} style={{ marginBottom: '1rem' }}>
      <Label
        htmlFor={props.id}
        required={fieldOptions.required}
        value={props.label}
      />
      {inputProps.iconOptions && (
        <span {...inputProps.iconWrapper}>
          <CalendarIcon
            {...getIconProps(inputProps.iconOptions as IconOptions)}
          />
        </span>
      )}
      {onChange ? (
        <input {...input} onChange={onChange} value={value} />
      ) : (
        <input {...input} defaultValue={props.defaultValue} />
      )}
      {helpId && props.helpText && !fieldOptions.invalid && (
        <HelpMessage id={helpId || ''} message={props.helpText} />
      )}
      {fieldOptions.invalid && props.errorMessage && (
        <ErrorMessage
          id={errorId || ''}
          invalid={fieldOptions.invalid}
          message={props.errorMessage}
        />
      )}
      {fieldOptions.invalid && (
        <span {...inputProps.invalidIconWrapper}>
          <WarningTriangleFilledIcon
            {...getIconProps(inputProps.invalidIconOptions as IconOptions)}
          />
        </span>
      )}
    </div>
  )
}

function getDescribedBy(helpId: string | null, errorId: string | null) {
  const describedBy = []

  if (helpId) {
    describedBy.push(helpId)
  }
  if (errorId) {
    describedBy.push(errorId)
  }

  return describedBy.join(',')
}
