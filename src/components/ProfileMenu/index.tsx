import { type MouseEvent } from 'react'
import { getIconProps } from '@pluralsight/headless-styles'
import {
  PersonIcon,
  NoteIcon,
  GearIcon,
  SignoutIcon,
  PlaceholderIcon,
} from '@pluralsight/icons'
import AvatarButton from '../AvatarButton'
import Menu from '../Menu'
import MenuItem from '../MenuItem'

const iconOptions = getIconProps({
  size: 'l',
  ariaHidden: true,
})

interface ProfileMenuProps {
  name?: string
  imgSrc?: string
  onClick?: (event: MouseEvent) => void
}

export default function ProfileMenu(props: ProfileMenuProps) {
  return (
    <Menu
      label="Profile menu"
      trigger={
        <AvatarButton
          label={props.name || ''}
          src={
            props.imgSrc ||
            'https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=32&h=32&q=80'
          }
          sentiment="action"
          size="xs"
        />
      }
      style={{
        right: '0',
      }}
    >
      <MenuItem href="/">
        <PersonIcon {...iconOptions} />
        <span>Profile</span>
      </MenuItem>
      <MenuItem href="/">
        <PlaceholderIcon {...iconOptions} />
        <span>Trophy Case</span>
      </MenuItem>
      <MenuItem href="/">
        <NoteIcon {...iconOptions} />
        <span>Notes</span>
      </MenuItem>
      <MenuItem href="/">
        <PlaceholderIcon {...iconOptions} />
        <span>History</span>
      </MenuItem>
      <MenuItem href="/">
        <GearIcon {...iconOptions} />
        <span>Account Settings</span>
      </MenuItem>
      <MenuItem divider />
      <MenuItem href="/">
        <SignoutIcon {...iconOptions} />
        <span>Sign out</span>
      </MenuItem>
    </Menu>
  )
}
