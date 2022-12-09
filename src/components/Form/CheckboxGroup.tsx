import { type ChangeEvent } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { type FormControlOptions } from '@pluralsight/headless-styles/types'
import { type NormalizedData } from '../../types'
import Checkbox from './Checkbox'
import Flex from '../Flex'

interface CheckboxGroupProps extends FormControlOptions {
  direction?: 'row' | 'col'
  id: string
  label: string
  name: string
  value: string[]
  options: NormalizedData<string>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function CheckboxGroup(props: CheckboxGroupProps) {
  const labelProps = getFormLabelProps({ htmlFor: '', value: props.label })
  const { control, fieldOptions } = getFormControlProps({
    groupType: 'group',
  })

  return (
    <div {...control}>
      <div style={{ marginTop: '1rem' }}>
        <label
          className={labelProps.className}
          style={{ marginBottom: '.5rem' }}
        >
          {props.label}
        </label>
        <Flex
          direction={props.direction === 'col' ? 'column' : 'row'}
          gap="1rem"
        >
          {props.options.dataList.map((optionValue) => {
            const optionLabel = props.options.data[optionValue]
            return (
              <Checkbox
                key={optionValue}
                checked={props.value.indexOf(optionValue) > -1}
                direction={props.direction}
                id={`${props.id}-${optionValue}`}
                label={optionLabel}
                name={props.name}
                onChange={props.onChange}
                value={optionValue}
                {...fieldOptions}
              />
            )
          })}
        </Flex>
      </div>
    </div>
  )
}
