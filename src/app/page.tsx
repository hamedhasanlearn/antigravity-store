import Navbar from '@/components/Navbar';
import HeroSceneWrapper from '@/components/HeroSceneWrapper';
import styles from './page.module.css';

/* ── Feature cards data ─────────────────────────────────── */
const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Built on Next.js 15 with the App Router for sub-second page loads and seamless navigation.',
  },
  {
    icon: '🔐',
    title: 'Secure Auth',
    desc: 'Supabase-powered authentication with JWT sessions, OAuth providers, and row-level security.',
  },
  {
    icon: '💳',
    title: 'Stripe Payments',
    desc: 'Integrated Stripe Checkout with webhooks that automatically track every order in real time.',
  },
  {
    icon: '🌐',
    title: 'Global CDN',
    desc: `Deployed on Vercel's global edge network. Your customers get ultra-fast loads anywhere on Earth.`,
  },
  {
    icon: '📦',
    title: 'Order Tracking',
    desc: 'A full PostgreSQL backend via Supabase records every order and exposes a private dashboard.',
  },
  {
    icon: '✨',
    title: '3D Visuals',
    desc: 'Powered by Three.js and React Three Fiber, delivering stunning 3D scenes in the browser.',
  },
];

/* ── Product cards data ─────────────────────────────────── */
const products = [
  { emoji: '🔮', name: 'Nebula Orb', price: '$129', tag: 'Bestseller' },
  { emoji: '🛸', name: 'Gravity Disc', price: '$249', tag: 'New' },
  { emoji: '🌀', name: 'Vortex Ring', price: '$89',  tag: 'Limited' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className={styles.hero} id="hero">
        {/* 3D Canvas */}
        <div className={styles.heroCanvas} aria-hidden="true">
          <HeroSceneWrapper />
        </div>

        {/* Radial glow behind text */}
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={`container ${styles.heroContent}`}>
          <span className={`${styles.badge} glass animate-fade-up`}>
            🚀 &nbsp; Next-Gen Commerce Platform
          </span>

          <h1 className={`${styles.heroTitle} animate-fade-up animate-delay-1`}>
            Build Beyond
            <br />
            <span className="gradient-text">Gravity</span>
          </h1>

          <p className={`${styles.heroSub} animate-fade-up animate-delay-2`}>
            A complete full-stack store with 3D animations, secure login,
            real-time order tracking, and Stripe payments — deployed globally
            on Vercel.
          </p>

          <div className={`${styles.heroCta} animate-fade-up animate-delay-3`}>
            <a href="/signup" className="btn btn-primary" id="hero-get-started-btn">
              Get Started Free →
            </a>
            <a href="#features" className="btn btn-outline" id="hero-learn-more-btn">
              Learn More
            </a>
          </div>

          {/* Social proof */}
          <div className={`${styles.heroStats} animate-fade-up animate-delay-4`}>
            <div className={styles.stat}>
              <strong>10k+</strong>
              <span>Happy customers</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>$2M+</strong>
              <span>Processed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────── */}
      <section className={styles.section} id="features">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Why Anti-Gravity?</span>
            <h2>Everything you need,<br /><span className="gradient-text">nothing you don't</span></h2>
            <p className={styles.sectionDesc}>
              We've assembled the best-in-class tools into one cohesive, premium stack.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={`${styles.card} glass`} id={`feature-${f.title.toLowerCase().replace(/ /g,'-')}`}>
                <span className={styles.cardIcon}>{f.icon}</span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────── */}
      <section className={styles.section} id="products">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Featured Products</span>
            <h2>Our <span className="gradient-text">Flagship</span> Items</h2>
            <p className={styles.sectionDesc}>
              Premium Anti-Gravity products — click to checkout via Stripe.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {products.map((p) => (
              <div key={p.name} className={`${styles.productCard} glass`} id={`product-${p.name.toLowerCase().replace(/ /g,'-')}`}>
                <div className={styles.productEmoji}>{p.emoji}</div>
                <span className={styles.productTag}>{p.tag}</span>
                <h3 className={styles.productName}>{p.name}</h3>
                <div className={styles.productFooter}>
                  <strong className={styles.productPrice}>{p.price}</strong>
                  <button className="btn btn-primary" id={`buy-${p.name.toLowerCase().replace(/ /g,'-')}`}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────── */}
      <section className={styles.ctaBanner} id="pricing">
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaGlow} aria-hidden="true" />
            <h2>Ready to launch<br /><span className="gradient-text">your store?</span></h2>
            <p>Sign up today. Deploy in minutes. Scale to millions.</p>
            <a href="/signup" className="btn btn-primary" id="cta-signup-btn">
              Start Building Free →
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerInner}>
            <span className={styles.footerLogo}>⟁ Anti-Gravity</span>
            <p className={styles.footerText}>
              © {new Date().getFullYear()} Anti-Gravity. Built with Next.js, Supabase & Stripe.
            </p>
            <div className={styles.footerLinks}>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
