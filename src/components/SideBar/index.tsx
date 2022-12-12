import { type PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import { getIconProps } from '@pluralsight/headless-styles'
import {
  AccountIcon,
  DashboardIcon,
  HomeContentToolsIcon,
  ListBulletsIcon,
  NotebooksIcon,
  OrgChartIcon,
  ReportIcon,
  TagAssignmentsIcon,
  WindowsIcon,
} from '@pluralsight/icons'
import styles from './SideBar.module.css'
import HelpModal from '../HelpModal'

const iconProps = getIconProps({
  ariaHidden: true,
  size: 'l',
})

export default function SideBar() {
  return (
    <nav className={styles.sidebar}>
      <LeaderTools />
      <ContentTools />
      <HelpModal />
    </nav>
  )
}

function LeaderTools() {
  return (
    <>
      <MenuHeader>Leader Tools</MenuHeader>
      <Menu>
        <MenuItem>
          <DashboardIcon {...iconProps} />
          Dashboard
        </MenuItem>
        <MenuItem>
          <AccountIcon {...iconProps} />
          Account
        </MenuItem>
        <MenuItem>
          <OrgChartIcon {...iconProps} />
          People
        </MenuItem>
        <MenuItem>
          <ListBulletsIcon {...iconProps} />
          Priorities
        </MenuItem>
        <MenuItem>
          <ReportIcon {...iconProps} />
          Analytics
        </MenuItem>
        <MenuItem>
          <NotebooksIcon {...iconProps} />
          Log
        </MenuItem>
      </Menu>
    </>
  )
}

function ContentTools() {
  return (
    <>
      <MenuHeader>Content Tools</MenuHeader>
      <Menu>
        <MenuItem>
          <HomeContentToolsIcon {...iconProps} />
          Home
        </MenuItem>
        <MenuItem>
          <AccountIcon {...iconProps} />
          Content libraries
        </MenuItem>
        <MenuItem>
          <WindowsIcon {...iconProps} />
          Courses
        </MenuItem>
        <MenuItem>
          <TagAssignmentsIcon {...iconProps} />
          Tags & Assignments
        </MenuItem>
        <MenuItem>
          <ReportIcon {...iconProps} />
          Library Explorer
        </MenuItem>
      </Menu>
    </>
  )
}

function MenuHeader(props: PropsWithChildren) {
  return <h2 className={styles.menuHeader}>{props.children}</h2>
}

function Menu(props: PropsWithChildren) {
  return <menu className={styles.menu}>{props.children}</menu>
}

interface MenuItemProps extends PropsWithChildren {
  href?: string
}

function MenuItem(props: MenuItemProps) {
  return (
    <li className={styles.menuItem}>
      {props.href ? (
        <Link to={props.href}>{props.children}</Link>
      ) : (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>{props.children}</a>
      )}
    </li>
  )
}
