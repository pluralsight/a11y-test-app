import { type ChangeEvent, useState } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import InputField from '../Form/Input'
import Textarea from '../Form/Textarea'
import styles from './HelpModal.module.css'

export default function SupportNowForm() {
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
      <div className={styles.formButtons}>
        <button {...getButtonProps({ sentiment: 'action' }).button}>
          Send
        </button>
      </div>
    </>
  )
}
