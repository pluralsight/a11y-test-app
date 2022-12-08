import { type ChangeEvent, useCallback, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  getButtonProps,
  getGridProps,
  getIconButtonProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { HelpCircleIcon } from '@pluralsight/icons'
import Modal from '../Modal'
import Select from '../Form/Select'
import TextLink from '../TextLink'
import InputField from '../Form/Input'
import Textarea from '../Form/Textarea'
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

interface HelpFormProps {
  cancel: () => void
}

const helpTypeOptions = {
  'support@pluralsight.com': 'Request Support Now',
  'ko-feedback+knowledgeowl_ext_content_feedback@pluralsight.com':
    'Provide Content Feedback',
  'ko-feedback+knowledgeowl_ext_feature_suggestions@pluralsight.com':
    'Provide New Feature Suggestions',
  'ko-feedback+knowledgeowl_ext_website_feedback@pluralsight.com':
    'Provide Website Feedback',
  'ko-feedback+knowledgeowl_ext_content_suggestions@pluralsight.com':
    'Provide New Content Suggestions',
}

function HelpForm(props: HelpFormProps) {
  const [helpType, setHelpType] = useState('')

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setHelpType(event.target.value)
  }

  return (
    <div>
      <div {...getGridProps({ cols: 2, gap: 32 })}>
        <Select
          id="helpTypeSelect"
          name="helpTypeSelect"
          label="What is the type of our request?"
          options={helpTypeOptions}
          onChange={handleChange}
          placeholder="---Please select---"
          helpText={
            helpType && 'Use the subject field to find related articles.'
          }
          value={helpType}
        />

        <div>{helpType && <SupportNowForm />}</div>
      </div>

      <div className={styles.footer}>
        <p>
          If you want immediate help, please navigate to our{' '}
          <TextLink href="https://pluralsight.knowledgeowl.com/help">
            Help Center
          </TextLink>
          .
        </p>

        <p>
          Email:{' '}
          <TextLink href="support@pluralsight.com">
            support@pluralsight.com
          </TextLink>{' '}
          || Phone: (801) 784-9007 (Mon - Fri, 8:00 am - 5:00 pm MST)
        </p>
      </div>
    </div>
  )
}

function SupportNowForm() {
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')
  const [email, setEmail] = useState('')

  function handleSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setSubject(event.target.value)
  }

  function handleDetailsChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDetails(event.target.value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <>
      <InputField
        id="supportSubject"
        label="Subject"
        name="supportSubject"
        required
        type="text"
        onChange={handleSubjectChange}
        placeholder=""
        value={subject}
      />
      <Textarea
        id="supportDetails"
        label="Details"
        name="supportDetails"
        required
        onChange={handleDetailsChange}
        placeholder=""
        value={details}
      />
      <InputField
        id="supportEmail"
        label="Your Email Address"
        name="supportEmail"
        required
        type="email"
        onChange={handleEmailChange}
        placeholder="email@address.com"
        value={email}
      />
      <button {...getButtonProps({ sentiment: 'action' }).button}>Send</button>
    </>
  )
}
