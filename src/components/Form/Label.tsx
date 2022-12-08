import { getFormLabelProps } from '@pluralsight/headless-styles'
import { type FormLabelOptions } from '@pluralsight/headless-styles/types'

export default function Label(props: FormLabelOptions) {
  const { value, ...labelProps } = getFormLabelProps(props)

  return <label {...labelProps}>{value}</label>
}
