import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bento-card" style={{ marginBottom: 'var(--space-md)', padding: 'var(--space-sm) var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 'var(--radius-full)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 'var(--font-weight-bold)', fontSize: '1.25rem' }}>
          SwapIt
        </Link>
        {isLoggedIn && (
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 'var(--font-weight-medium)' }}>
            Dashboard
          </Link>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
        {isLoggedIn ? (
          <>
            <span style={{ color: 'var(--text-secondary)' }}>Welcome, Neighbor</span>
            <Button onClick={() => setIsLoggedIn(false)} style={{ padding: 'var(--space-xs) var(--space-md)', backgroundColor: 'var(--surface-secondary)', color: 'var(--text-primary)' }}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button style={{ padding: 'var(--space-xs) var(--space-md)', backgroundColor: 'transparent', color: 'var(--text-primary)' }}>
                Login
              </Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button style={{ padding: 'var(--space-xs) var(--space-md)' }}>
                Register
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
