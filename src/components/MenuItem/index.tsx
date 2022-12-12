import { Link } from 'react-router-dom'
import {
  Children,
  cloneElement,
  memo,
  type ReactElement,
  type PropsWithChildren,
} from 'react'
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
      <Link to={props.href || '/'} {...props.menuItem} {...rovingTabIndexProps}>
        {Children.map(props.children, (child) => {
          const childEl = child as ReactElement
          if (childEl?.type === 'span') {
            return cloneElement(childEl, { ...props.menuItemText })
          }

          return child
        })}
      </Link>
    </li>
  )
}

export default memo(MenuItem)
