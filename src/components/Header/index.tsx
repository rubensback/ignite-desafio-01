import styles from './Header.module.css'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />
    </header>
  )
}
