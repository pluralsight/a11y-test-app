import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { type IconOptions } from '@pluralsight/headless-styles/types'
import { ThemeIcon } from '@pluralsight/icons'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark')
  const iconButtonProps = getIconButtonProps({
    ariaLabel: `Toggle light or dark color theme (currently ${theme})`,
    sentiment: 'default',
    usage: 'text',
  })

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme)
  }
  useEffect(applyTheme, [theme])

  return (
    <button {...iconButtonProps.button} onClick={toggleTheme}>
      <ThemeIcon
        {...getIconProps(iconButtonProps.iconOptions as IconOptions)}
      />
    </button>
  )
}
