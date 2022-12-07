import { getGridProps } from '@pluralsight/headless-styles'
import Card from '../Card'
import CardHeader from '../CardHeader'
import VideoLink from '../VideoLink'

export default function GetStartedCard() {
  return (
    <Card>
      <CardHeader linkHref="/" linkText="View all" linkIconText="history">
        Get started
      </CardHeader>
      <div {...getGridProps({ cols: 3, gap: 16 })}>
        <VideoLink />
        <VideoLink />
        <VideoLink />
      </div>
    </Card>
  )
}
