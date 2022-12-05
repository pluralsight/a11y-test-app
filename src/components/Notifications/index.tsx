import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { NotificationsIcon } from '@pluralsight/icons'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'Notifications',
  usage: 'text',
  size: 'l',
})

export default function Notifications() {
  return (
    <button {...iconButtonProps.button}>
      <NotificationsIcon
        {...getIconProps(iconButtonProps.iconOptions as IconOptions)}
      />
    </button>
  )
}
