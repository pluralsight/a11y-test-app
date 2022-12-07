import {
  getFormControlProps,
  getIconProps,
  getInputProps,
} from '@pluralsight/headless-styles'
import { SearchIcon } from '@pluralsight/icons'
import { type ChangeEvent, useState } from 'react'

export default function SearchInput() {
  const [value, setValue] = useState('')
  const { fieldOptions } = getFormControlProps()
  const inputProps = getInputProps({
    ...fieldOptions,
    id: 'exampleIconInput',
    kind: 'icon',
    name: 'icon_input',
    placeholder: 'Search...',
    type: 'text',
    value,
  })
  // TODO: Bug in CSS Input API
  const iconOverride = {
    lineHeight: 0,
    top: '1.5rem',
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <div {...inputProps.inputWrapper}>
      <span {...inputProps.iconWrapper} style={iconOverride}>
        <SearchIcon {...getIconProps(inputProps.iconOptions as any)} />
      </span>
      <input
        {...inputProps.input}
        aria-label="Search"
        onChange={handleChange}
      />
    </div>
  )
}
