import styles from "./Header.module.css";
import logo from "../../assets/eventUp-logo.png";
import { useState } from "react";

export default function Header({ onPageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header_container}>
      <h1 className={styles.logo}>
        <img src={logo} alt="EventUp Logo" />
      </h1>


        <nav
          className={`${styles.menu_toggle_links} ${
            isMenuOpen ? styles.show : ""
          }`}
        >
          <a onClick={() => onPageChange(2)}>Home</a>
          <a onClick={(e) => e.preventDefault()}>Events</a>
          <a onClick={(e) => e.preventDefault()}>Profile</a>
        </nav>

      <button
        className={` ${styles.menu_toggle} ${
          isMenuOpen ? styles.menu_open : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="material-symbols-outlined">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
    </header>
  );
}
