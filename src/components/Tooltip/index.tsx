import {
  useState,
  useCallback,
  Children,
  cloneElement,
  type ReactElement,
  type PropsWithChildren,
  type CSSProperties,
} from 'react'
import { useEscToClose } from '@pluralsight/react-utils'
import { getTooltipProps } from '@pluralsight/headless-styles'
import { type TooltipOptions } from '@pluralsight/headless-styles/types'

interface TooltipProps extends PropsWithChildren, TooltipOptions {
  label: string
  wrapperStyle?: CSSProperties
}

export default function Tooltip(props: TooltipProps) {
  const [disabled, setDisabled] = useState(false)

  const tooltipProps = getTooltipProps({
    id: props.id,
    position: props.position,
    disabled: disabled,
  })

  const disable = useCallback(() => {
    setDisabled(true)
  }, [])

  function enable() {
    setDisabled(false)
  }

  useEscToClose(disable)

  return (
    <div
      {...tooltipProps.wrapper}
      style={props.wrapperStyle}
      onMouseEnter={enable}
      onFocus={enable}
    >
      <>
        {Children.map(props.children, (child) => {
          const childEl = child as unknown as ReactElement

          return cloneElement(childEl, {
            ...tooltipProps.trigger,
            className: `${tooltipProps.trigger.className} ${childEl?.props.className}`,
          })
        })}

        <div {...tooltipProps.tooltip}>
          <div {...tooltipProps.tooltipContent}>{props.label}</div>
        </div>
      </>
    </div>
  )
}
