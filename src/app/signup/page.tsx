import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';
import styles from '../login/login.module.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (signupError) {
      setError(signupError.message);
      setLoading(false);
    } else {
      alert('Check your email for the confirmation link!');
      router.push('/login');
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
            <h1>Join Anti-Gravity</h1>
            <p>Create an account to start your journey</p>
          </div>

          {error && <div style={{ color: '#ff4444', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}

          <form className={styles.form} onSubmit={handleSignup}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                required 
                className="glass"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {loading ? 'Creating Account...' : 'Create Account'}
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

