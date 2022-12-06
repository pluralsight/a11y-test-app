import { memo, type PropsWithChildren } from 'react'
import { getMenuItemProps } from '@pluralsight/headless-styles'
import { useRovingTabIndex } from '@pluralsight/react-utils'

interface MenuItemProps extends PropsWithChildren {
  divider?: boolean
  href?: string
}

interface MenuItemChildProps
  extends PropsWithChildren,
    ReturnType<typeof getMenuItemProps> {
  href?: string
}

interface DividerProps {
  className: string
}

function MenuItem(props: MenuItemProps) {
  const menuItemProps = getMenuItemProps()

  return (
    <>
      {props.divider ? (
        <li {...(menuItemProps.divider as DividerProps)} />
      ) : (
        <MenuChildren {...props} {...menuItemProps} />
      )}
    </>
  )
}

function MenuChildren(props: MenuItemChildProps) {
  if (props.href) {
    return <MenuLink {...props} />
  }

  return <MenuButton {...props} />
}

function MenuButton(props: MenuItemChildProps) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <button {...props.menuItem} {...rovingTabIndexProps}>
        {props.children}
      </button>
    </li>
  )
}

function MenuLink(props: MenuItemChildProps) {
  const rovingTabIndexProps = useRovingTabIndex()

  return (
    <li {...props.menuListItem}>
      <a href={props.href} {...props.menuItem} {...rovingTabIndexProps}>
        {props.children}
      </a>
    </li>
  )
}

export default memo(MenuItem)
