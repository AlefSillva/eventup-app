import styles from './Header.module.css';
import logo from '../../assets/eventUp-logo.png';
import { useState } from 'react';

export default function Header({ onPageChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header
            className={styles.header_container}
        >
            <h1 className={styles.logo}>
                <img src={logo } alt="EventUp Logo" />
            </h1>

            {isMenuOpen && (
                <nav>
                    <a onClick={() => onPageChange(1)}>Home</a>
                    <a onClick={() => onPageChange(2)}>Events</a>
                    <a onClick={() => onPageChange(3)}>Profile</a>
                </nav>
            )}

            <button className={styles.menu_toggle}
                onClick={toggleMenu}
            >
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    )
}