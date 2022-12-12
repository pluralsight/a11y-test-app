import { Link } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footerMenu}>
          <FooterLink href="https://help.pluralsight.com/help/using-pluralsight">
            Features
          </FooterLink>
          <FooterLink href="https://www.pluralsight.com/authors">
            Meet the Authors
          </FooterLink>
          <FooterLink href="https://www.pluralsight.com/downloads">
            Mobile &amp; offline apps
          </FooterLink>
        </ul>
      </nav>
    </footer>
  )
}

interface FooterLinkProps extends PropsWithChildren {
  href: string
}

function FooterLink(props: FooterLinkProps) {
  return (
    <li className={styles.footerMenuItem}>
      <Link to={props.href} className={styles.footerLink}>
        {props.children}
      </Link>
    </li>
  )
}
