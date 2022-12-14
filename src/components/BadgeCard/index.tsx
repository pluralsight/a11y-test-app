import { Link } from 'react-router-dom'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import PreloadedImg from '../PreloadImg'
import styles from './BadgeCard.module.css'

export default function BadgeCard() {
  return (
    <Card>
      <CardHeader
        justify="space-between"
        linkHref="/"
        linkText="View all (12)"
        linkIconText="badges"
      >
        Your badges
      </CardHeader>
      <h3>Newly earned badge</h3>
      <FeaturedBadge />
      <h3>Upcoming</h3>
      <Flex>
        <Badge />
        <Badge />
        <Badge />
      </Flex>
    </Card>
  )
}

function FeaturedBadge() {
  return (
    <Link to="/" className={styles.badge}>
      <Flex align="center">
        <PreloadedImg
          alt="Weekly Goal 1x Badge"
          className={styles.badgeImage}
          height={115}
          kind="circle"
          src="https://source.unsplash.com/random/115x115/?hiking&q=80"
          width={115}
        />
        <div className={styles.featuredBadgeText}>
          <strong className={styles.featuredBadgeHeading}>
            Weekly Goal 1x
          </strong>
          Set a goal. Get new skills.
        </div>
      </Flex>
    </Link>
  )
}

function Badge() {
  return (
    <Link to="/" className={styles.badge}>
      <PreloadedImg
        alt="Stellar Explorer Badge"
        className={styles.badgeImage}
        height={60}
        kind="circle"
        src="https://source.unsplash.com/random/60x60/?space&q=80"
        width={60}
      />
      <div className={styles.badgeText}>Stellar Explorer</div>
    </Link>
  )
}
