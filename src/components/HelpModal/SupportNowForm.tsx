import { type ChangeEvent, useState } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import InputField from '../Form/Input'
import Textarea from '../Form/Textarea'
import styles from './HelpModal.module.css'
import RadioGroup from '../Form/RadioGroup'
import CheckboxGroup from '../Form/CheckboxGroup'

export default function SupportNowForm() {
  const [subject, setSubject] = useState('')
  const [details, setDetails] = useState('')
  const [email, setEmail] = useState('')
  const [severity, setSeverity] = useState('')
  const [products, setProducts] = useState<string[]>([])

  function handleSubjectChange(event: ChangeEvent<HTMLInputElement>) {
    setSubject(event.target.value)
  }

  function handleDetailsChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setDetails(event.target.value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function handleSeverityChange(event: ChangeEvent<HTMLInputElement>) {
    setSeverity(event.target.value)
  }

  function handleProductChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    if (event.target.checked) {
      setProducts((prev) => [...prev, value])
    } else {
      setProducts((prev) => products.filter((product) => product !== value))
    }
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
      <RadioGroup
        direction="col"
        id="supportSeverity"
        label="Type of issue"
        name="supportSeverity"
        value={severity}
        onChange={handleSeverityChange}
        options={{
          dataList: ['bug', 'accessibility', 'account'],
          data: {
            bug: "Something isn't working",
            accessibility: "I can't use something",
            account: 'Account issue',
          },
        }}
      />
      <CheckboxGroup
        id="supportProduct"
        label="Relevant product"
        name="supportProduct"
        value={products}
        onChange={handleProductChange}
        options={{
          dataList: ['skills', 'flow', 'cloud'],
          data: {
            cloud: 'Cloud skills',
            flow: 'Flow',
            skills: 'Skills',
          },
        }}
      />
      <div className={styles.formButtons}>
        <button {...getButtonProps({ sentiment: 'action' }).button}>
          Send
        </button>
      </div>
    </>
  )
}
