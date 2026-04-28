'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>⟁</span>
          <span className="gradient-text">Anti-Gravity</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links} id="nav-links">
          <li><a href="#features" className={styles.link}>Features</a></li>
          <li><a href="#products" className={styles.link}>Products</a></li>
          <li><a href="#pricing" className={styles.link}>Pricing</a></li>
        </ul>

        {/* CTA buttons */}
        <div className={styles.actions}>
          <a href="/login" className="btn btn-outline" id="nav-login-btn">Log in</a>
          <a href="/signup" className="btn btn-primary" id="nav-signup-btn">Get Started</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="nav-hamburger"
        >
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`${styles.mobileMenu} glass`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#pricing"  onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/login"    onClick={() => setMenuOpen(false)} className="btn btn-outline" style={{width:'100%', justifyContent:'center'}}>Log in</a>
          <a href="/signup"   onClick={() => setMenuOpen(false)} className="btn btn-primary" style={{width:'100%', justifyContent:'center'}}>Get Started</a>
        </div>
      )}
    </nav>
  );
}
