import Flex from '../Flex'
import Progress from '../Progress'
import styles from './VideoLink.module.css'

export default function VideoLink() {
  return (
    <a href="/" className={styles.videoLink}>
      <Flex direction="column">
        <div className={styles.videoPreview}>
          <img
            src="https://source.unsplash.com/random/310x96/?office&q=80"
            alt="video placeholder"
            width="310"
            height="96"
          />
          <Progress
            kind="inset"
            now={Math.round(Math.random() * 100)}
            size="xs"
          />
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
