import {
  forwardRef,
  memo,
  useEffect,
  useRef,
  type MouseEvent,
  type ForwardedRef,
  type RefObject,
} from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getButtonProps,
  getConfirmDialogProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import {
  type ConfirmDialogOptions,
  type IconOptions,
} from '@pluralsight/headless-styles/types'

interface ConfirmDialogProps extends ConfirmDialogOptions {
  body: string
  confirmText: string
  confirmTitle: string
  onClose: () => void
  onConfirm: () => void
}

function ConfirmDialogEl(
  props: ConfirmDialogProps,
  triggerRef: ForwardedRef<HTMLButtonElement>
) {
  const { onClose, onConfirm, ...confirmProps } = props
  const wrapperRef = useRef(null)
  const confirm = getConfirmDialogProps(confirmProps)
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(
    triggerRef as RefObject<HTMLButtonElement>
  )
  const isDestructive = confirmProps.kind === 'destructive'

  function handleBackdropClick(event: MouseEvent) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  useEffect(() => {
    setupFocusTrap()
  }, [setupFocusTrap])

  return (
    <div {...confirm.backdrop}>
      <div {...confirm.focusGuard} />

      <div {...confirm.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...confirm.section} ref={ref} onKeyDown={onKeyDown}>
          <header {...confirm.header}>
            {isDestructive && (
              <span {...confirm.iconWrapper}>
                <DangerDiamondFilledIcon
                  {...getIconProps(confirm.iconOptions as IconOptions)}
                />
              </span>
            )}
            <h6 {...confirm.confirmTitle}>{props.confirmTitle}</h6>
          </header>
          <p {...confirm.confirmBody}>{props.body}</p>
          <footer {...confirm.buttonGroup}>
            <button
              {...getButtonProps(confirm.cancelBtnOptions).button}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              {...getButtonProps(confirm.agreeBtnOptions).button}
              onClick={onConfirm}
            >
              {props.confirmText}
            </button>
          </footer>
        </section>
      </div>

      <div {...confirm.focusGuard} />
    </div>
  )
}

const ConfirmDialog = memo(forwardRef(ConfirmDialogEl))

export default ConfirmDialog
