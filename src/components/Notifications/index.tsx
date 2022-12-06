import { type MouseEvent } from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import {
  CloseIcon,
  // NotificationsIcon,
  NotificationsActiveIcon,
  MegaphoneIcon,
} from '@pluralsight/icons'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import styles from './Notifications.module.css'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'Notifications',
  usage: 'text',
  size: 'l',
})

const notificationIconButtonProps = getIconButtonProps({
  ariaLabel: 'Dismiss notification',
  usage: 'text',
  size: 'l',
})

const notificationData = {
  notificationList: [
    'notification-1',
    'notification-2',
    'notification-3',
    'notification-4',
    'notification-5',
    'notification-6',
    'notification-7',
  ],
  notificationDetails: {},
}

export default function Notifications() {
  function handleClose(event: MouseEvent) {
    event.preventDefault()
  }

  return (
    <Menu
      label="Notifications"
      trigger={
        <button {...iconButtonProps.button}>
          <NotificationsActiveIcon
            {...getIconProps(iconButtonProps.iconOptions as IconOptions)}
          />
        </button>
      }
      style={{
        right: '0',
        width: '23rem',
        maxHeight: '75vh',
        overflowY: 'auto',
      }}
    >
      {notificationData.notificationList.map((datum) => (
        <Notification handleClose={handleClose} />
      ))}
      <MenuItem divider={true} />
      <MenuItem href="/">View all notifications</MenuItem>
    </Menu>
  )
}

interface NotificationProps {
  handleClose: (event: MouseEvent) => void
}

function Notification(props: NotificationProps) {
  return (
    <MenuItem href="/">
      <div className={styles.notification}>
        <span className={styles.notificationCloseButton}>
          <button
            {...notificationIconButtonProps.button}
            onClick={props.handleClose}
          >
            <CloseIcon
              {...getIconProps(
                notificationIconButtonProps.iconOptions as IconOptions
              )}
            />
          </button>
        </span>
        <span className={styles.notificationContent}>
          <span className={styles.notificationIcon}>
            <MegaphoneIcon {...getIconProps({ size: 'l', ariaHidden: true })} />
          </span>
          <div className={styles.notificationBody}>
            <p>
              A new course came out on{' '}
              <strong>React: Using Hooks in React 18</strong>
            </p>
            <time
              dateTime="2022-12-02T20:48:18.630Z"
              className={styles.notificationTimestamp}
            >
              About 1 month ago
            </time>
          </div>
        </span>
      </div>
    </MenuItem>
  )
}
