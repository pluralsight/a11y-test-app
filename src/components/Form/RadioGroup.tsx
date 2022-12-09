import { type ChangeEvent } from 'react'
import {
  getFormControlProps,
  getFormLabelProps,
} from '@pluralsight/headless-styles'
import { type FormControlOptions } from '@pluralsight/headless-styles/types'
import { type NormalizedData } from '../../types'
import Radio from './Radio'
import Flex from '../Flex'

interface RadioGroupProps extends FormControlOptions {
  direction?: 'row' | 'col'
  id: string
  label: string
  name: string
  value: string
  options: NormalizedData<string>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function RadioGroup(props: RadioGroupProps) {
  const labelProps = getFormLabelProps({ htmlFor: '', value: props.label })
  const { control, fieldOptions } = getFormControlProps({
    groupType: 'radiogroup',
  })

  return (
    <div {...control}>
      <div>
        <label className={labelProps.className}>{props.label}</label>
        <Flex
          direction={props.direction === 'col' ? 'column' : 'row'}
          gap="1rem"
        >
          {props.options.dataList.map((optionValue) => {
            const optionLabel = props.options.data[optionValue]
            return (
              <Radio
                key={optionValue}
                checked={props.value === optionValue}
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
