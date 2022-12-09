import { type ChangeEvent, useState } from 'react'
import Select from '../Form/Select'
import TextLink from '../TextLink'
import SupportNowForm from './SupportNowForm'
import styles from './HelpModal.module.css'

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

interface HelpFormProps {
  cancel: () => void
}

export default function HelpForm(props: HelpFormProps) {
  const [helpType, setHelpType] = useState('')

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setHelpType(event.target.value)
  }

  return (
    <div className={styles.form}>
      <Select
        id="helpTypeSelect"
        name="helpTypeSelect"
        label="What is the type of our request?"
        options={helpTypeOptions}
        onChange={handleChange}
        placeholder="---Please select---"
        helpText={helpType && 'Use the subject field to find related articles.'}
        value={helpType}
      />

      <div>{helpType && <SupportNowForm />}</div>

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
