import {
  getGridProps,
  getGridItemProps,
  getIconProps,
} from '@pluralsight/headless-styles'
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
import ThemeSwitcher from '../ThemeSwitcher'
import styles from './AppBar.module.css'

const oneColItem = getGridItemProps({ colSpan: 1 })
const iconProps = getIconProps({
  ariaHidden: true,
  size: 'l',
})

export default function AppBar() {
  return (
    <header className={styles.wrapper}>
      <div {...getGridProps({ cols: 12, gap: 8 })}>
        <SkillsLogo />
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

function SkillsLogo() {
  return (
    <div {...oneColItem}>
      <a href="/" className={styles.logo}>
        <h1 className={styles.logoHeading}>
          <svg {...iconProps} viewBox="0 0 32 32">
            <defs>
              <linearGradient
                id="prism-skills-gradient"
                x1="45.6377"
                y1="47.4727"
                x2="-32.2436"
                y2="-35.2537"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.03" stopColor="#F05A28"></stop>
                <stop offset="0.93" stopColor="#EB008B"></stop>
              </linearGradient>
            </defs>
            <g>
              <path
                d="M0 0V32H32V0H0ZM9.4053 12.7438L15.088 16L9.4053 19.287V12.7438ZM9.4053 24.8503V21.6468L19.1842 16L9.4053 10.3532V7.17166L24.6955 16L9.4053 24.8503Z"
                fill="url(#prism-skills-gradient)"
              ></path>
            </g>
          </svg>
          <span>Skills</span>
        </h1>
      </a>
    </div>
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
    <div {...getGridItemProps({ colSpan: 1 })}>
      <Flex align="center" justify="space-around">
        <Notifications />
        <AppSwitcher />
        <ThemeSwitcher />
        <ProfileMenu name="User Name" />
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
