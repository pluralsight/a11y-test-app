import {
  getGridItemProps,
  getGridProps,
  getIconProps,
  getTextLinkProps,
} from '@pluralsight/headless-styles'
import { PlaceholderIcon, PlayCircleIcon } from '@pluralsight/icons'
import Card from '../Card'
import CardHeader from '../CardHeader'
import Flex from '../Flex'
import PreloadedImg from '../PreloadImg'
import Progress from '../Progress'
import styles from './TechFoundationsCard.module.css'

const playLinkProps = getTextLinkProps({
  href: '/',
})

export default function TechFoundationsCard() {
  return (
    <Card>
      <Flex justify="space-between">
        <CardHeader
          linkHref="/"
          linkText="View topics"
          linkIconText="for Tech Foundations"
        >
          Tech Foundations
        </CardHeader>
        <div>
          <Progress now={(3 / 12) * 100} size="xs" />
          <small>3/12 complete</small>
        </div>
      </Flex>
      <div {...getGridProps({ cols: 2, gap: 16 })}>
        <div {...getGridItemProps({ colSpan: 1 })}>
          <h3>
            <PreloadedImg
              width={52}
              height={52}
              src="https://ps-cdn.s3.us-west-2.amazonaws.com/criterion-ref/imgs/tf_api_economy_10-05-22.svg"
              aria-hidden="true"
              alt="API Economy icon"
            />
            &nbsp; API Economy Explained
          </h3>
          <p className={styles.description}>
            Explore how to "tie it all together"-connecting multiple disparate
            technologies with each other, combining your own applications and
            custom software with commercially available Cloud services, using
            automation and artificial intelligence tools to streamline the
            process.
          </p>
          <a {...playLinkProps.link}>
            <PlayCircleIcon
              {...getIconProps({ ariaHidden: true, size: 's' })}
            />
            Start learning
          </a>
        </div>
        <div {...getGridItemProps({ colSpan: 1 })}>
          <a href="/" className={styles.videoLink}>
            <span className={styles.videoIcon}>
              <PlayCircleIcon
                {...getIconProps({ ariaHidden: true, customSize: '60px' })}
              />
            </span>
            <PreloadedImg
              width={500}
              height={268}
              alt="API Economy Explained video"
              src="https://source.unsplash.com/random/500x268/?office&q=80"
            />
          </a>
        </div>
      </div>
      <hr className={styles.divider} />
      <p>Up next:</p>
      <div {...getGridProps({ cols: 3, gap: 16 })}>
        <CourseLink title="Software Development Explained" href="/" />
        <CourseLink title="Data Explained" href="/" />
        <CourseLink title="5G & IOT Explained" href="/" />
      </div>
    </Card>
  )
}

interface CourseLinkProps {
  href: string
  title: string
}

function CourseLink(props: CourseLinkProps) {
  return (
    <a href={props.href} className={styles.courseLink}>
      <PlaceholderIcon
        {...getIconProps({ customSize: '40px', ariaHidden: true })}
      />
      {props.title}
    </a>
  )
}
