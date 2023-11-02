import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo}>
          <a className={styles.link} href="https://mahercp.net/">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;