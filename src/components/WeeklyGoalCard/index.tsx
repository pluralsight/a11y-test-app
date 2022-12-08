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
      <span>
        <big>
          <b>12 min</b>
        </big>{' '}
        / 30 min
      </span>
      <Progress now={(12 / 30) * 100} />
      <small>Completed this week</small>
    </Card>
  )
}
