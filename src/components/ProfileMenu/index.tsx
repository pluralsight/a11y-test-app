import { type MouseEvent } from 'react'
import AvatarButton from '../AvatarButton'

interface ProfileMenuProps {
  name?: string
  imgSrc?: string
  onClick?: (event: MouseEvent) => void
}

export default function ProfileMenu(props: ProfileMenuProps) {
  return (
    <AvatarButton
      label={props.name || ''}
      src={
        props.imgSrc ||
        'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=32&h=32&q=80'
      }
      sentiment="action"
      size="xs"
    />
  )
}
