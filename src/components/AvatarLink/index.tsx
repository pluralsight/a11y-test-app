import { memo } from 'react'
import { getAvatarProps, getIconProps } from '@pluralsight/headless-styles'
import { PersonIcon } from '@pluralsight/icons'
import { type AvatarOptions } from '@pluralsight/headless-styles/types'
import PreloadedImg from '../PreloadImg'

type AvatarReturn = ReturnType<typeof getAvatarProps>

function MatchAvatarContent(props: Omit<AvatarReturn, 'wrapper'>) {
  if (props.image.src) {
    return <AvatarImg {...props.image} />
  } else if (props.label['aria-label']) {
    return <AvatarLabel {...props.label} />
  } else {
    return <PersonIcon {...getIconProps(props.iconOptions)} />
  }
}

type AvatarImgProps = Pick<AvatarReturn['image'], keyof AvatarReturn['image']>
function AvatarImg(props: AvatarImgProps) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <PreloadedImg {...props} />
}

type AvatarLabelProps = Pick<AvatarReturn['label'], keyof AvatarReturn['label']>
function AvatarLabel(props: AvatarLabelProps) {
  const { value, ...labelProps } = props
  return <div {...labelProps}>{value}</div>
}

interface AvatarLinkProps extends AvatarOptions {
  href: string
}

function AvatarLinkEl(props: AvatarLinkProps) {
  const { wrapper, ...avatarProps } = getAvatarProps({
    label: props.label || '',
    src: props.src || '',
    sentiment: props.sentiment,
    size: props.size,
  })

  return (
    <a {...wrapper} href={props.href} style={{ verticalAlign: 'middle' }}>
      <MatchAvatarContent {...avatarProps} />
    </a>
  )
}

export default memo(AvatarLinkEl)
