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

export default function Notifications() {
  return (
    <div className={styles.notificationWrapper}>
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
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem>
          <Notification />
        </MenuItem>
        <MenuItem divider={true} />
        <MenuItem href="/">View all notifications</MenuItem>
      </Menu>
    </div>
  )
}

function Notification() {
  return (
    <div className={styles.notification}>
      <span className={styles.notificationCloseButton}>
        <button {...notificationIconButtonProps.button}>
          <CloseIcon
            {...getIconProps(
              notificationIconButtonProps.iconOptions as IconOptions
            )}
          />
        </button>
      </span>
      <a href="/" className={styles.notificationContent}>
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
      </a>
    </div>
  )
}
