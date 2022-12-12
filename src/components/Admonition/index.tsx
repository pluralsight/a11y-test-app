import {
  getAdmonitionProps,
  getIconProps,
  getIconButtonProps,
} from '@pluralsight/headless-styles'
import {
  type AdmonitionOptions,
  type IconOptions,
} from '@pluralsight/headless-styles/types'
import {
  InfoCircleIcon,
  CheckCircleIcon,
  CloseIcon,
  WarningTriangleIcon,
} from '@pluralsight/icons'

type SentimentType = Pick<AdmonitionOptions, 'sentiment'>

function matchIconType(sentimentOption?: SentimentType) {
  switch (sentimentOption) {
    case 'success':
      return CheckCircleIcon

    case 'danger':
    case 'warning':
      return WarningTriangleIcon

    default:
      return InfoCircleIcon
  }
}

interface AdmonitionProps extends AdmonitionOptions {
  title: string
  description: string
  showButton?: boolean
  onClose?: () => void
}

export default function Admonition(props: AdmonitionProps) {
  const { sentiment } = props
  const admonition = getAdmonitionProps({ sentiment })
  const { button, iconOptions } = getIconButtonProps(
    admonition.iconButtonOptions
  )
  const Icon = matchIconType(sentiment as SentimentType)

  return (
    <div {...admonition.wrapper}>
      <span {...admonition.iconWrapper}>
        <Icon {...getIconProps(admonition.iconOptions)} />
      </span>
      <div {...admonition.textContainer}>
        <strong>
          <p {...admonition.title}>{props.title}</p>
        </strong>
        <small {...admonition.description}>{props.description}</small>
      </div>
      {props.showButton && (
        <button {...button} onClick={props.onClose}>
          <CloseIcon {...getIconProps(iconOptions as IconOptions)} />
        </button>
      )}
    </div>
  )
}
