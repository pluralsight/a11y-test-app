import {
  cloneElement,
  memo,
  type ReactElement,
  type PropsWithChildren,
  CSSProperties,
} from 'react'
import { getMenuProps } from '@pluralsight/headless-styles'
import { useMenuInteraction } from '@pluralsight/react-utils'

interface MenuProps extends PropsWithChildren {
  label: string
  trigger: ReactElement
  style?: CSSProperties
}

function Menu(props: MenuProps) {
  const menuProps = getMenuProps({
    label: props.label,
  })
  const menuInteractionProps = useMenuInteraction()

  return (
    <div {...menuProps.wrapper}>
      {cloneElement(props.trigger, {
        ...menuProps.trigger,
        ...menuInteractionProps.trigger,
      })}
      {menuInteractionProps.expanded && (
        <menu
          {...menuProps.menu}
          {...menuInteractionProps.menu}
          style={props.style}
        >
          {props.children}
        </menu>
      )}
    </div>
  )
}

export default memo(Menu)
