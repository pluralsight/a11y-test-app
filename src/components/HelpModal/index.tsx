import { useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { HelpCircleIcon } from '@pluralsight/icons'
import Modal from '../Modal'
import HelpForm from './HelpForm'
import styles from './HelpModal.module.css'

const iconButtonProps = getIconButtonProps({
  ariaLabel: 'Help',
  usage: 'text',
})
const iconProps = getIconProps(iconButtonProps.iconOptions as IconOptions)

export default function HelpModal() {
  const triggerRef = useRef(null)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  function handleShowModal() {
    setShowModal(true)
  }

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
          />,
          document.body
        )}
    </div>
  )
}
