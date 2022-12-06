import {
  Children,
  cloneElement,
  useEffect,
  type PropsWithChildren,
  type MouseEvent,
  type ReactElement,
  forwardRef,
  memo,
  type ForwardedRef,
  type RefObject,
} from 'react'
import { useFocusTrap } from '@pluralsight/react-utils'
import { getPopoverProps } from '@pluralsight/headless-styles'
import { type PopoverOptions } from '@pluralsight/headless-styles/types'
import Header from './Header'
import Body from './Body'
import CloseButton from './CloseButton'

export interface PopoverProps extends PropsWithChildren, PopoverOptions {
  handleClose: (event: MouseEvent) => void
  heading: string
  label?: string
  content: string | ReactElement
}

export function Popover(
  props: PopoverProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const popoverStyles = getPopoverProps({
    ariaLabel: props.label,
    bodyId: `${props.id}-body`,
    headerId: props.heading && `${props.id}-header`,
    id: props.id,
    isExpanded: props.isExpanded,
    position: props.position,
  })
  const {
    ref: popoverRef,
    onKeyDown,
    setupFocusTrap,
  } = useFocusTrap(ref as RefObject<HTMLButtonElement>)

  useEffect(() => {
    setupFocusTrap(false)
  }, [setupFocusTrap])

  return (
    <div {...popoverStyles.wrapper}>
      {Children.map(props.children, (child) =>
        cloneElement(child as ReactElement, {
          ...popoverStyles.trigger,
        })
      )}

      {props.isExpanded && (
        <section {...popoverStyles.popover} ref={popoverRef}>
          <div {...popoverStyles.content} onKeyDown={onKeyDown}>
            {props.heading && (
              <Header {...popoverStyles.header}>{props.heading}</Header>
            )}
            <Body {...popoverStyles.body}>{props.content}</Body>
            <CloseButton {...popoverStyles} onClick={props.handleClose} />
          </div>
        </section>
      )}
    </div>
  )
}

export default memo(forwardRef(Popover))
