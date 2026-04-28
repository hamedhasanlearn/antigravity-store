'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from '../login/login.module.css'; // Reuse login styles

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.glow} />
        
        <div className={`${styles.card} glass animate-fade-up`}>
          <div className={styles.header}>
            <span className={styles.icon}>⟁</span>
            <h1>Join Anti-Gravity</h1>
            <p>Create an account to start your journey</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                required 
                className="glass"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                required 
                className="glass"
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required 
                className="glass"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Create Account
            </button>
          </form>

          <div className={styles.footer}>
            <p>Already have an account? <Link href="/login" className="gradient-text">Log in</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
