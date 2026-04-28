'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
        fetchOrders(user.email);
      }
    };

    const fetchOrders = async (email: string) => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_email', email)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setOrders(data);
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Loading your profile...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <header className={styles.header}>
          <div className="container">
            <span className={styles.badge}>Private Dashboard</span>
            <h1>Welcome back, <span className="gradient-text">{user?.user_metadata?.full_name || 'Explorer'}</span></h1>
            <p className={styles.email}>{user?.email}</p>
          </div>
        </header>

        <section className="container">
          <div className={styles.grid}>
            {/* Stats */}
            <div className={`${styles.card} glass`}>
              <h3>Account Status</h3>
              <div className={styles.status}>
                <span className={styles.dot} />
                Active Premium Member
              </div>
            </div>

            <div className={`${styles.card} glass`}>
              <h3>Total Spent</h3>
              <p className={styles.bigNumber}>
                ${orders.reduce((acc, curr) => acc + (curr.amount || 0), 0)}
              </p>
            </div>
          </div>

          {/* Orders Table */}
          <div className={`${styles.ordersSection} glass`}>
            <h2>Order History</h2>
            {orders.length === 0 ? (
              <div className={styles.empty}>
                <p>No orders found. Ready to make your first purchase?</p>
                <a href="/#products" className="btn btn-primary">Browse Products</a>
              </div>
            ) : (
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className={styles.productName}>{order.product_name}</td>
                        <td>{new Date(order.created_at).toLocaleDateString()}</td>
                        <td className={styles.amount}>${order.amount}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${styles[order.status?.toLowerCase()]}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
