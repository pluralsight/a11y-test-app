import { getTextareaProps } from '@pluralsight/headless-styles'
import { type TextareaOptions } from '@pluralsight/headless-styles/types'
import { type ChangeEvent } from 'react'
import ErrorMessage from './ErrorMessage'
import HelpMessage from './HelpMessage'
import Label from './Label'

interface TextareaProps extends TextareaOptions {
  errorMessage?: string
  helpText?: string
  label: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function Textarea(props: TextareaProps) {
  const textareaProps = getTextareaProps(props)

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Label htmlFor={props.id} required={props.required} value={props.label} />
      <textarea {...textareaProps} onChange={props.onChange} />
      {props.helpText && !props.invalid && (
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
