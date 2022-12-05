import { getIconProps } from "@pluralsight/headless-styles"
import { type ComponentType } from "react"
import styles from './AppBarIcon.module.css'

interface Props {
  icon: ComponentType
  label: string
}

export default function AppBarIcon(props: Props) {
  const Icon = props.icon

  return (
    <div className={styles.container}>
      <span className={styles.iconWrapper}>
        <Icon {...getIconProps()} />
      </span>
      <small className="size-xs">{props.label}</small>
    </div>
  )
}