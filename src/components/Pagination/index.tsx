import { useState, ChangeEvent } from 'react'
import { getPaginationProps } from '@pluralsight/headless-styles'
import Select from '../Form/Select'

interface PaginationProps {
  start: number
  end: number
  total: number
}

export default function Pagination(props: PaginationProps) {
  const [rowOption, setRowOption] = useState('')
  const styles = getPaginationProps({ cols: 3 })

  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    setRowOption(e.target.value)
  }

  return (
    <div
      {...styles.container}
      style={{
        gridTemplateColumns: '1fr 1fr auto',
      }}
    >
      <div>
        <small {...styles.text}>
          <strong>
            {props.start}-{props.end}
          </strong>{' '}
          of {props.total}
        </small>
      </div>
      <div>
        <Select
          id="row-count"
          label="Rows to display"
          name="row_count"
          onChange={handleSelectChange}
          options={{
            '5': '5 Rows',
            '10': '10 Rows',
            '25': '25 Rows',
          }}
          size="m"
          value={rowOption}
        />
      </div>
      <div>
        <button {...styles.newer} data-disabled disabled>
          Newer
        </button>
        <button {...styles.older}>Older</button>
      </div>
    </div>
  )
}
