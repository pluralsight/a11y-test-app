import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'
import { BrowseIcon, ChannelIcon, HomeIcon, PathIcon } from '@pluralsight/icons'
import { type PropsWithChildren } from 'react'
import AppBarIcon from '../AppBarIcon'
import Flex from '../Flex'
import SearchInput from '../SearchInput'
import styles from './AppBar.module.css'

const oneColItem = getGridItemProps({ colSpan: 1 })

export default function AppBar() {
  return (
    <header className={styles.wrapper}>
      <div {...getGridProps({ cols: 12, gap: 8 })}>
        <a className={styles.logo} href="/" {...oneColItem}>
          Skills Logo
        </a>
        <HomeLinks />
        <span {...getGridItemProps({ colSpan: 4 })}>
          <SearchInput />
        </span>
        <Shortcuts />
      </div>
    </header>
  )
}

function HomeLinks() {
  return (
    <div {...oneColItem}>
      <Flex align="center" justify="space-between">
        <Link>
          <AppBarIcon icon={HomeIcon} label="Home" />
        </Link>
        <Link>
          <AppBarIcon icon={BrowseIcon} label="Browse" />
        </Link>
      </Flex>
    </div>
  )
}

function Shortcuts() {
  return (
    <>
      <div {...oneColItem}>
        <Flex align="center" justify="space-between">
          <Link>
            <AppBarIcon icon={HomeIcon} label="Skill IQ" />
          </Link>
          <Link>
            <AppBarIcon icon={BrowseIcon} label="Certifications" />
          </Link>
        </Flex>
      </div>
      <div {...oneColItem}>
        <Flex align="center" justify="space-between">
          <Link>
            <AppBarIcon icon={PathIcon} label="Paths" />
          </Link>
          <Link>
            <AppBarIcon icon={ChannelIcon} label="Channels" />
          </Link>
        </Flex>
      </div>
    </>
  )
}

function Link(props: PropsWithChildren<{}>) {
  return (
    <a href="/" className={styles.link}>
      {props.children}
    </a>
  )
}