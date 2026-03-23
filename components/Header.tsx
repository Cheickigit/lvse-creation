'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Accueil',   href: '/' },
  { name: 'Services',  href: '/services' },
  { name: 'À propos',  href: '/a-propos' },
  { name: 'Contact',   href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '68px',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--gold-border)',
        transition: 'background 0.3s, box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 24px rgba(201,168,76,0.08)' : 'none',
      }}
    >
      <div
        className="container-custom"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src="/images/LVSE logo.png"
            alt="LVSE CRÉATION"
            style={{
              height: '40px',
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--navy)',
              letterSpacing: '0.03em',
              lineHeight: 1,
            }}
          >
            LVSE<span style={{ color: 'var(--gold)' }}>CRÉATION</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '36px' }} className="hidden-mobile">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          href="/devis"
          className="hidden-mobile"
          style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            background: 'var(--navy)',
            color: 'var(--white)',
            padding: '10px 22px',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--navy2)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'var(--navy)';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          Demander un devis
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--navy)',
            padding: '6px',
          }}
          className="show-mobile"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid var(--gold-border)',
            padding: '20px 24px 24px',
          }}
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '10px 0',
                fontSize: '15px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/devis"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              background: 'var(--navy)',
              color: 'var(--white)',
              textAlign: 'center',
              padding: '13px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Demander un devis
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
      `}</style>
    </header>
  );
}