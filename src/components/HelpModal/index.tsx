import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { HelpCircleIcon } from '@pluralsight/icons'
import Modal from '../Modal'
import HelpForm from './HelpForm'
import styles from './HelpModal.module.css'
import ConfirmDialog from '../ConfirmDialog'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'Help',
  usage: 'text',
})
const iconProps = getIconProps(iconButtonProps.iconOptions as IconOptions)

export default function HelpModal() {
  const triggerRef = useRef(null)
  const [showModal, setShowModal] = useState(false)
  const closeRef = useRef(null)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleCloseModal = useCallback(() => {
    setShowConfirm(true)
  }, [])

  function handleShowModal() {
    setShowModal(true)
  }

  const handleConfirmClose = useCallback(() => {
    setShowConfirm(false)
  }, [])

  const handleConfirm = useCallback(() => {
    handleConfirmClose()
    setShowModal(false)
  }, [handleConfirmClose])

  return (
    <div className={styles.wrapper}>
      <button {...iconButtonProps.button} onClick={handleShowModal}>
        <HelpCircleIcon {...iconProps} />
      </button>

      {showModal &&
        createPortal(
          <Modal
            bodyId="helpModal-body"
            body={<HelpForm cancel={handleCloseModal} />}
            heading="Support Request"
            headingId="helpModal-header"
            id="helpModal"
            onClose={handleCloseModal}
            ref={triggerRef}
            closeRef={closeRef}
          />,
          document.body
        )}

      {showConfirm &&
        createPortal(
          <ConfirmDialog
            headerId="modalCloseConfirm-header"
            bodyId="modalCloseConfirm-body"
            id="modalCloseConfirm"
            kind="destructive"
            onClose={handleConfirmClose}
            onConfirm={handleConfirm}
            ref={closeRef}
            body={
              'Information you have entered is not saved and will be lost if you close this form.'
            }
            confirmText={'Yes, I do not need help'}
            confirmTitle={'Close this request?'}
          />,
          document.body
        )}
    </div>
  )
}
