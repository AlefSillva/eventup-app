import styles from './Header.module.css';
import logo from '../../assets/eventUp-logo.png';

export default function Header() {
    return (
        <header className={styles.header_container}>
            <h1 className={styles.logo}>
                <img src={logo } alt="EventUp Logo" />
            </h1>

            <button className={styles.menu_toggle} >
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    )
}