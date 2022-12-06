import { type MouseEvent } from 'react'
import { CloseIcon } from '@pluralsight/icons'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { type PopoverReturn } from './types'

interface CloseButtonProps extends PopoverReturn {
  onClick?: (event: MouseEvent) => void
}

export default function CloseButton(props: CloseButtonProps) {
  const { onClick, ...popoverProps } = props
  const iconButtonProps = getIconButtonProps(popoverProps.closeButtonOptions)
  const iconProps = getIconProps(iconButtonProps.iconOptions as IconOptions)

  return (
    <span {...popoverProps.closeButtonWrapper}>
      <button {...iconButtonProps.button} onClick={onClick}>
        <CloseIcon {...iconProps} />
      </button>
    </span>
  )
}
