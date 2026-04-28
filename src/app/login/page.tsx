'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.glow} />
        
        <div className={`${styles.card} glass animate-fade-up`}>
          <div className={styles.header}>
            <span className={styles.icon}>⟁</span>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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
              <div className={styles.labelRow}>
                <label htmlFor="password">Password</label>
                <a href="#" className={styles.forgot}>Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                required 
                className="glass"
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Sign In
            </button>
          </form>

          <div className={styles.footer}>
            <p>Don't have an account? <Link href="/signup" className="gradient-text">Sign up</Link></p>
          </div>
        </div>
      </main>
    </>
  );
}
