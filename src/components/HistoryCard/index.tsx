import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import VideoLink from '../VideoLink'

export default function GetStartedCard() {
  return (
    <Card>
      <CardHeader linkHref="/" linkText="View all" linkIconText="history">
        Get started
      </CardHeader>
      <Flex justify="space-between">
        <VideoLink />
        <VideoLink />
        <VideoLink />
      </Flex>
    </Card>
  )
}
