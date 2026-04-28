'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import styles from './login.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
    } else {
      router.push('/');
    }
  };

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

          {error && <div style={{ color: '#ff4444', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                required 
                className="glass"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={loading}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
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

