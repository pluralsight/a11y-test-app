import { ChangeEvent, useState } from 'react'
import {
  getGridItemProps,
  getGridProps,
  getIconButtonProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { PlusIcon } from '@pluralsight/icons'
import Select from '../Form/Select'
import Switch from '../Switch'
import styles from './SearchResults.module.css'
import Badge from '../Badge'
import Pagination from '../Pagination'

const headerGridProps = getGridProps({ cols: 12, gap: 16 })
const headerProps = {
  ...headerGridProps,
  style: {
    ...headerGridProps.style,
    alignItems: 'center',
  },
}

export default function SearchResults() {
  const [showRetired, setShowRetired] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  function toggleShowRetired() {
    setShowRetired((prev) => !prev)
  }

  function handleSortChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortBy(event.target.value)
  }

  return (
    <section>
      <header className={styles.header}>
        <div {...headerProps}>
          <div {...getGridItemProps({ colSpan: 6 })}>
            <strong className={styles.total}>10,269 Results</strong>
          </div>

          <div {...getGridItemProps({ colSpan: 3 })}>
            <Switch
              label="Show 7,129 retired results"
              onClick={toggleShowRetired}
              checked={showRetired}
              id={'showRetired'}
              name={'showRetired'}
            />
          </div>

          <div {...getGridItemProps({ colSpan: 3 })}>
            <Select
              label={'Sort by'}
              onChange={handleSortChange}
              options={{
                newest: 'Newest',
                popular: 'Popular',
              }}
              id={'sortBy'}
              name={'sortBy'}
              value={sortBy}
            />
          </div>
        </div>
      </header>
      <div className={styles.results}>
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
      <div className={styles.pagination}>
        <Pagination start={1} end={3} total={500} />
      </div>
    </section>
  )
}

const addButtonProps = getIconButtonProps({
  ariaLabel: 'add',
  usage: 'text',
})
const addIconProps = getIconProps(addButtonProps.iconOptions as IconOptions)

function SearchResult() {
  return (
    <div className={styles.resultItem}>
      <div className={styles.resultImage}>
        <div
          style={{
            borderRadius: '8px',
            width: '112px',
            height: '84px',
            background: 'lightgreen',
          }}
        />
      </div>
      <div className={styles.resultContent}>
        <div className={styles.resultEyebrow}>
          <Badge>Course</Badge>
          <Badge sentiment="action">New</Badge>
        </div>
        <a href="/" className={styles.resultTitle}>
          Validating Data Input in Spring 5 Web Applications
        </a>
        <address className={styles.resultByline}>
          By{' '}
          <a href="/" rel="author">
            Bogdan Sucaciu
          </a>
        </address>
        <footer className={styles.resultFooter}>
          <small>
            <time dateTime="2022-09-12">Dec 09, 2022</time>
          </small>
          <small>Advanced</small>
          <small>No Rating</small>
          <small>1h 41m</small>
        </footer>
      </div>
      <div className={styles.resultAdd}>
        <button {...addButtonProps.button}>
          <PlusIcon {...addIconProps} />
        </button>
      </div>
    </div>
  )
}
