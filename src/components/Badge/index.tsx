import { PropsWithChildren, ReactNode, useMemo } from 'react'
import { getBadgeProps, getIconProps } from '@pluralsight/headless-styles'
import { type BadgeOptions } from '@pluralsight/headless-styles/types'

interface BadgeProps extends PropsWithChildren, BadgeOptions {
  icon?: ReactNode
}

export default function Badge(props: BadgeProps) {
  const { children, icon, ...badgeProps } = props
  const { badge, ...iconProps } = getBadgeProps(badgeProps)
  const iconEl = useMemo(() => {
    if (icon && badgeProps.size === 'xs') {
      console.error('You cannot display an Icon with the "xs" size Badge.')
      return null
    }

    return icon
  }, [icon, badgeProps.size])
  const Icon = iconEl

  return (
    <span {...badge} style={{ display: 'inline-flex' }}>
      {Icon && (
        <span {...iconProps.iconWrapper}>
          {/* <Icon {...getIconProps(iconProps.iconOptions)} /> */}
        </span>
      )}
      {children}
    </span>
  )
}
