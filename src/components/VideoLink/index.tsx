import { getProgressProps } from '@pluralsight/headless-styles'
import Flex from '../Flex'
import styles from './VideoLink.module.css'

export default function VideoLink() {
  const progressProps = getProgressProps({
    kind: 'inset',
    now: Math.round(Math.random() * 100),
    size: 'xs',
  })

  return (
    <a href="/" className={styles.videoLink}>
      <Flex direction="column">
        <div className={styles.videoPreview}>
          <img
            src="https://source.unsplash.com/random/?office&w=310&h=96&q=80"
            alt="video placeholder"
            width="310"
            height="96"
          />
          <div {...progressProps.wrapper}>
            <div {...progressProps.bar} />
          </div>
        </div>

        <strong>Platforms Explained</strong>
        <small>
          <span>Simon Allardice</span>
          &nbsp;&middot;&nbsp;
          <span>Beginner</span>
        </small>
        <small>40m</small>
      </Flex>
    </a>
  )
}
