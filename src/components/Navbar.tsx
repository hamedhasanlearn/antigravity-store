'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);

    // Check current auth state
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoIcon}>⟁</span>
          <span className="gradient-text">Anti-Gravity</span>
        </a>

        <ul className={styles.links}>
          <li><a href="/#features" className={styles.link}>Features</a></li>
          <li><a href="/#products" className={styles.link}>Products</a></li>
        </ul>

        <div className={styles.actions}>
          {user ? (
            <div className={styles.userSection}>
              <a href="/dashboard" className={styles.link} style={{marginRight: '1rem'}}>Dashboard</a>
              <span className={styles.userEmail}>{user.email}</span>
              <button onClick={handleSignOut} className="btn btn-outline">Sign Out</button>
            </div>
          ) : (
            <>
              <a href="/login" className="btn btn-outline">Log in</a>
              <a href="/signup" className="btn btn-primary">Get Started</a>
            </>
          )}
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
          <span className={menuOpen ? styles.barOpen : styles.bar} />
        </button>
      </div>

      {menuOpen && (
        <div className={`${styles.mobileMenu} glass`}>
          {user ? (
            <>
              <span className={styles.userEmailMobile}>{user.email}</span>
              <button onClick={handleSignOut} className="btn btn-outline">Sign Out</button>
            </>
          ) : (
            <>
              <a href="/login" onClick={() => setMenuOpen(false)}>Log in</a>
              <a href="/signup" onClick={() => setMenuOpen(false)} className="btn btn-primary">Get Started</a>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

