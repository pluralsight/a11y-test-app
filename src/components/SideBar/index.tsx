import { type PropsWithChildren } from 'react'
import { getGridItemProps, getIconProps } from '@pluralsight/headless-styles'
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

const iconProps = getIconProps({
  ariaHidden: true,
  size: 'l',
})

export default function SideBar() {
  return (
    <div {...getGridItemProps({ colSpan: 2 })}>
      <nav className={styles.sidebar}>
        <LeaderTools />
        <ContentTools />
      </nav>
    </div>
  )
}

function LeaderTools() {
  return (
    <>
      <MenuHeader>Leader Tools</MenuHeader>
      <Menu>
        <MenuItem href="/">
          <DashboardIcon {...iconProps} />
          Dashboard
        </MenuItem>
        <MenuItem href="/">
          <AccountIcon {...iconProps} />
          Account
        </MenuItem>
        <MenuItem href="/">
          <OrgChartIcon {...iconProps} />
          People
        </MenuItem>
        <MenuItem href="/">
          <ListBulletsIcon {...iconProps} />
          Priorities
        </MenuItem>
        <MenuItem href="/">
          <ReportIcon {...iconProps} />
          Analytics
        </MenuItem>
        <MenuItem href="/">
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
        <MenuItem href="/">
          <HomeContentToolsIcon {...iconProps} />
          Home
        </MenuItem>
        <MenuItem href="/">
          <AccountIcon {...iconProps} />
          Content libraries
        </MenuItem>
        <MenuItem href="/">
          <WindowsIcon {...iconProps} />
          Courses
        </MenuItem>
        <MenuItem href="/">
          <TagAssignmentsIcon {...iconProps} />
          Tags & Assignments
        </MenuItem>
        <MenuItem href="/">
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
  href: string
}

function MenuItem(props: MenuItemProps) {
  return (
    <li className={styles.menuItem}>
      <a href={props.href}>{props.children}</a>
    </li>
  )
}
