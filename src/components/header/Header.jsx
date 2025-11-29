import styles from "./Header.module.css";
import logo from "../../assets/eventUp-logo.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../contexts/auth/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    setIsMenuOpen(false);
    logout();
    navigate("/login");
  };

  return (
    <header className={styles.header_container}>
      <h1 className={styles.logo}>
        <img src={logo} alt="EventUp Logo" />
      </h1>

      <nav
        id="menu"
        className={`${styles.menu_toggle_links} ${isMenuOpen ? styles.show : ""}`}
      >
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
        
        {user ? (
          <>
            <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Profile</Link>
            <Link to="/favorites" onClick={() => setIsMenuOpen(false)}>Favorites</Link>
            <a href="#" onClick={handleLogout}>
              Logout
            </a>
          </>
        ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
          )}
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
