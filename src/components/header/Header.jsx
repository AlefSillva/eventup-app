import styles from "./Header.module.css";
import logo from "../../assets/eventUp-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header_container}>
      <h1 className={styles.logo}>
        <img src={logo} alt="EventUp Logo" />
      </h1>

      <nav className={`${styles.menu_toggle_links} ${isMenuOpen ? styles.show : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
        <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
      </nav>

      <button
        className={`${styles.menu_toggle} ${isMenuOpen ? styles.menu_open : ""}`}
        onClick={toggleMenu}
      >
        <span className="material-symbols-outlined">
          {isMenuOpen ? "close" : "menu"}
        </span>
      </button>
    </header>
  );
}
