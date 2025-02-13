import { CgGlobeAlt, CgSearch } from 'react-icons/cg'
import styles from './header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.labellabelLogo}>
          <img src="/assets/logo.svg" alt="Logo Nano" />
          <label>BLOCKLATTICE.ORG</label>
        </div>

        <div className="nano-quotation">
          <label>1N USD 0.94 </label>
          <label> +1.51%^ </label>
        </div>
        <div className={styles.selectLanguage}><CgGlobeAlt /> <label>Engish</label> </div>
        <div className={styles.searchHeader}><CgSearch /></div>
      </header>
    </>
  );
}
