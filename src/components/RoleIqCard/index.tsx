import AvatarLink from '../AvatarLink'
import Card from '../Card'
import Flex from '../Flex'
import styles from './RoleIqCard.module.css'

export default function RoleIqCard() {
  return (
    <Card>
      <Flex direction="column" align="center">
        <AvatarLink
          href="/profile"
          label="User Name"
          sentiment="action"
          src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=32&h=32&q=80"
          size="m"
        />
        <a href="/profile" className={styles.name}>
          User Name
        </a>
        <a href="/roleiq" className={styles.link}>
          What is your Role IQ?
        </a>
      </Flex>
    </Card>
  )
}
