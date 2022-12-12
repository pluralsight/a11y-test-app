import {
  type ForwardedRef,
  type RefObject,
  type MouseEvent,
  forwardRef,
  memo,
  useEffect,
  useRef,
  type ReactElement,
} from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getIconButtonProps,
  getIconProps,
  getModalProps,
} from '@pluralsight/headless-styles'
import {
  type IconOptions,
  type ModalOptions,
} from '@pluralsight/headless-styles/types'
import { CloseIcon } from '@pluralsight/icons'

interface ModalProps extends ModalOptions {
  heading: ReactElement | string
  body: ReactElement | string
  onClose: () => void
}

function ModalEl(
  props: ModalProps,
  triggerRef: ForwardedRef<HTMLButtonElement>
) {
  const { onClose, ...modalProps } = props
  const modal = getModalProps(modalProps)
  console.log(modal)
  const { button, iconOptions } = getIconButtonProps(modal.cancelBtnOptions)
  const wrapperRef = useRef(null)
  const { ref, onKeyDown, setupFocusTrap } = useFocusTrap(
    triggerRef as RefObject<HTMLButtonElement>
  )

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
    <div {...modal.backdrop}>
      <div {...modal.focusGuard} />

      <div {...modal.wrapper} ref={wrapperRef} onClick={handleBackdropClick}>
        <section {...modal.section} ref={ref} onKeyDown={onKeyDown}>
          <header>
            <h6 {...modal.modalHeading}>{props.heading}</h6>
          </header>
          <div {...modal.modalBody}>{props.body}</div>
          <footer {...modal.buttonWrapper}>
            <button {...button} onClick={onClose}>
              <CloseIcon {...getIconProps(iconOptions as IconOptions)} />
            </button>
          </footer>
        </section>
      </div>

      <div {...modal.focusGuard} />
    </div>
  )
}

const Modal = memo(forwardRef(ModalEl))

export default Modal
