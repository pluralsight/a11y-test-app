import { getFieldMessageProps } from '@pluralsight/headless-styles'
import { type FieldMessageOptions } from '@pluralsight/headless-styles/types'

export default function HelpMessage(props: FieldMessageOptions) {
  const { value, ...fieldMessage } = getFieldMessageProps(props)

  return <small {...fieldMessage}>{value}</small>
}
