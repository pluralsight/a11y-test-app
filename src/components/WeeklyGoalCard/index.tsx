import { getButtonProps } from '@pluralsight/headless-styles'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import Progress from '../Progress'

export default function WeeklyGoalCard() {
  return (
    <Card>
      <Flex justify="space-between">
        <CardHeader>Weekly goal</CardHeader>
        <button
          {...getButtonProps({
            usage: 'outline',
            size: 'm',
          }).button}
        >
          Edit goal
        </button>
      </Flex>
      <GoalDisplay elapsedMinutes={12} goal={1} goalUnits="hours" />
    </Card>
  )
}

interface GoalProps {
  goal: number
  elapsedMinutes: number
  goalUnits: 'min' | 'hours'
}

function GoalDisplay(props: GoalProps) {
  function calculateProgressPercent() {
    const goalMinutes = props.goalUnits === 'min' ? props.goal : props.goal * 60
    return Math.floor((props.elapsedMinutes / goalMinutes) * 100)
  }

  return (
    <div>
      <span>
        <big>
          <ElapsedTime minutes={props.elapsedMinutes} />
        </big>{' '}
        / {props.goal} {props.goalUnits}
      </span>
      <Progress now={calculateProgressPercent()} />
      <small>Completed this week</small>
    </div>
  )
}

interface ElapsedTimeProps {
  minutes: number
}
function ElapsedTime(props: ElapsedTimeProps) {
  const units = props.minutes >= 60 ? 'hours' : 'min'
  const displayTime =
    units === 'hours'
      ? Math.round((props.minutes / 60) * 100) / 100
      : props.minutes

  return (
    <b>
      {displayTime} {units}
    </b>
  )
}
