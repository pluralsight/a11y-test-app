import { getErrorMessageProps } from '@pluralsight/headless-styles'
import { type ErrorMessageOptions } from '@pluralsight/headless-styles/types'
import { HTMLAttributes } from 'react'

export default function ErrorMessage(props: ErrorMessageOptions) {
  const errorMessageProps = getErrorMessageProps(props)

  return (
    <div {...(errorMessageProps.container as HTMLAttributes<HTMLDivElement>)}>
      <small {...errorMessageProps.message}>
        {errorMessageProps.message.value}
      </small>
    </div>
  )
}
