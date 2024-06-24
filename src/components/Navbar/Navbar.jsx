import Link from "next/link";
import styles from './Navbar.module.css';
import { links } from './data.js';
import Logo from "@/elements/logo/logo";
import Button from "@/elements/Button/Button";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          
            <Logo /> {/* Logo à gauche */}
          
        </Link>
        <DarkModeToggle />
       <button
          className={`navbar-toggler ${styles.customToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${styles.links} `}>
        {/* Toggle de mode sombre (ou autre composant) au centre */}


        {/* Bouton toggle pour mobile */}
        

        <div className={`collapse navbar-collapse  ${styles.links}`} id="navbarNav">
          <ul className="navbar-nav">
            {links.map(link => (
              <li className="nav-item" key={link.id}>
                <Link href={link.url} className={`nav-link ${styles.link}`}>
                {link.title}
                </Link>
              </li>
            ))}        <Button /> {/* Bouton de navigation à droite */}
          </ul>
  
        </div>
        
        </div>
      </div>
    </nav>

  );
}
