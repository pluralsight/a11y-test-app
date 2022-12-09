import {
  getButtonProps,
  getIconProps,
  getSelectProps,
} from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { ChevronDownIcon } from '@pluralsight/icons'
import { ChangeEvent, useState } from 'react'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import Progress from '../Progress'
import styles from './WeeklyGoalCard.module.css'

export default function WeeklyGoalCard() {
  const [editing, setEditing] = useState(false)
  const [goalMinutes, setGoalMinutes] = useState(30)

  function toggleEdit() {
    setEditing((prev) => !prev)
  }

  function handleGoalChange(minutes: number) {
    setGoalMinutes(minutes)
    toggleEdit()
  }

  return (
    <Card>
      <Flex justify="space-between">
        <CardHeader>Weekly goal</CardHeader>
        <button
          {...getButtonProps({
            usage: 'outline',
            size: 'm',
          }).button}
          onClick={toggleEdit}
        >
          {editing ? 'Cancel' : 'Edit goal'}
        </button>
      </Flex>
      {editing ? (
        <GoalEdit selected={goalMinutes} onChange={handleGoalChange} />
      ) : (
        <GoalDisplay elapsedMinutes={12} goalMinutes={goalMinutes} />
      )}
    </Card>
  )
}

interface GoalProps {
  goalMinutes: number
  elapsedMinutes: number
}

function GoalDisplay(props: GoalProps) {
  function calculateProgressPercent() {
    return Math.floor((props.elapsedMinutes / props.goalMinutes) * 100)
  }

  return (
    <div className={styles.goalProgress}>
      <div>
        <big>
          <b>
            <DisplayTime minutes={props.elapsedMinutes} />
          </b>
        </big>{' '}
        / <DisplayTime minutes={props.goalMinutes} />
      </div>
      <div>
        <Progress
          label="Weekly goal progress"
          now={calculateProgressPercent()}
        />
      </div>
      <div>
        <small>Completed this week</small>
      </div>
    </div>
  )
}

interface DisplayTimeProps {
  minutes: number
}
function DisplayTime(props: DisplayTimeProps) {
  const hours = Math.round((props.minutes / 60) * 100) / 100
  const units = hours >= 1 ? `hour${hours > 1 ? 's' : ''}` : 'min'

  const displayTime = units === 'min' ? props.minutes : hours

  return (
    <>
      {displayTime} {units}
    </>
  )
}

interface GoalEditProps {
  selected: number
  onChange: (value: number) => void
}

const goalOptions = {
  optionList: ['15', '30', '45', '60', '120', '240', '360', '600', '0'],
  options: {
    '15': '15 minutes a week',
    '30': '30 minutes a week',
    '45': '45 minutes a week',
    '60': '1 hour a week',
    '120': '2 hours a week',
    '240': '4 hours a week',
    '360': '6 hours a week',
    '600': '10 hours a week',
    '0': 'Not this week',
  },
}

function GoalEdit(props: GoalEditProps) {
  const [value, setValue] = useState(props.selected)
  const selectProps = getSelectProps({
    id: 'goalMinutes',
    name: 'goalMinutes',
  })

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setValue(parseInt(event.target.value, 10))
  }

  function reportSave() {
    props.onChange(value)
  }

  return (
    <div>
      <p>
        Keep going — you've got this! How much time do you want to learn this
        week?
      </p>
      <Flex>
        <div {...selectProps.fieldWrapper}>
          <div {...selectProps.selectWrapper}>
            <select
              {...selectProps.select}
              onChange={handleChange}
              value={value}
              aria-label="Select a weekly learning goal"
            >
              {goalOptions.optionList.map((optVal) => (
                <option key={optVal} value={optVal}>
                  {
                    goalOptions.options[
                      optVal as keyof typeof goalOptions['options']
                    ]
                  }
                </option>
              ))}
            </select>
            <span {...selectProps.iconWrapper}>
              <ChevronDownIcon
                {...getIconProps(selectProps.iconOptions as IconOptions)}
              />
            </span>
          </div>
        </div>
        <button
          {...getButtonProps({ sentiment: 'action' }).button}
          onClick={reportSave}
          style={{ marginTop: '.5rem', marginLeft: '.5rem' }}
        >
          Save
        </button>
      </Flex>
    </div>
  )
}
