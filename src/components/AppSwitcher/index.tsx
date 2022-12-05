import { DashboardIcon } from '@pluralsight/icons'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'Switch Pluralsight Apps',
  usage: 'text',
  size: 'l',
})

export default function AppSwitcher() {
  return (
    <button {...iconButtonProps.button}>
      <DashboardIcon
        {...getIconProps(iconButtonProps.iconOptions as IconOptions)}
      />
    </button>
  )
}
