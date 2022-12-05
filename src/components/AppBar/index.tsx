import { getGridProps, getGridItemProps } from '@pluralsight/headless-styles'
import {
  BookmarkIcon,
  BrowseIcon,
  ChannelIcon,
  HomeIcon,
  PathIcon,
  SkillIqIcon,
} from '@pluralsight/icons'
import { type PropsWithChildren } from 'react'
import AppBarIcon from '../AppBarIcon'
import AppSwitcher from '../AppSwitcher'
import Flex from '../Flex'
import Notifications from '../Notifications'
import ProfileMenu from '../ProfileMenu'
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
        <span {...getGridItemProps({ colSpan: 6 })}>
          <SearchInput />
        </span>
        <Shortcuts />
        <Profile />
      </div>
    </header>
  )
}

function HomeLinks() {
  return (
    <div {...oneColItem}>
      <Flex align="center" justify="space-around">
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
      <div {...getGridItemProps({ colSpan: 3 })}>
        <Flex align="center" justify="space-around">
          <Link>
            <AppBarIcon icon={SkillIqIcon} label="Skill IQ" />
          </Link>
          <Link>
            <AppBarIcon icon={BrowseIcon} label="Certifications" />
          </Link>
          <Link>
            <AppBarIcon icon={PathIcon} label="Paths" />
          </Link>
          <Link>
            <AppBarIcon icon={ChannelIcon} label="Channels" />
          </Link>
          <Link>
            <AppBarIcon icon={BookmarkIcon} label="Bookmarks" />
          </Link>
        </Flex>
      </div>
    </>
  )
}

function Profile() {
  return (
    <div {...oneColItem}>
      <Flex align="center" justify="space-around">
        <Notifications />
        <AppSwitcher />
        <ProfileMenu />
      </Flex>
    </div>
  )
}

function Link(props: PropsWithChildren<{}>) {
  return (
    <a href="/" className={styles.link}>
      {props.children}
    </a>
  )
}
