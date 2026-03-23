'use client';

import Link from 'next/link';
import { ArrowRight, Building2, Shield, FileText, BarChart } from 'lucide-react';

const serviceCards = [
  {
    icon: Building2,
    title: 'Création de société',
    desc: "De l'idée à l'immatriculation",
    href: '/services/creation-societe',
  },
  {
    icon: Shield,
    title: 'Exonération fiscale',
    desc: 'Optimisez vos avantages',
    href: '/services/exoneration-fiscale',
  },
  {
    icon: FileText,
    title: "Montage d'appel d'offres",
    desc: 'Dossiers complets',
    href: '/services/montage-dossier',
  },
  {
    icon: BarChart,
    title: 'Analyse DAO',
    desc: 'Maximisez vos chances',
    href: '/services/analyse-dao',
  },
];

const stats = [
  { value: '100+', label: 'Entreprises créées' },
  { value: '15+',  label: "Années d'expérience" },
  { value: '98%',  label: 'Clients satisfaits' },
];

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(155deg, #ffffff 0%, #f7f3ea 55%, #f0e5c0 100%)',
        minHeight: '92vh',
        paddingTop: '108px',
        paddingBottom: '80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '60px',
      }}
      className="hero-grid-wrap"
    >
      {/* Decorative rings */}
      {[600, 420, 260].map((size, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            border: '1px solid var(--gold-border)',
            top: `${-size / 2 + 40}px`,
            right: `${-size / 2 + 80}px`,
            opacity: 0.4 - i * 0.08,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Ambient blobs */}
      <div
        style={{
          position: 'absolute',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%)',
          top: '-60px',
          right: '-60px',
          pointerEvents: 'none',
          animation: 'drift 9s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          bottom: '40px',
          left: '-40px',
          pointerEvents: 'none',
          animation: 'drift 12s ease-in-out infinite reverse',
        }}
      />

      {/* Left content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '0 44px' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid var(--gold-border)',
            padding: '6px 16px 6px 8px',
            borderRadius: '40px',
            marginBottom: '28px',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(201,168,76,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--gold)',
                display: 'block',
                animation: 'pulse-gold 2s infinite',
              }}
            />
          </div>
          <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
            Expertise reconnue au Burkina Faso
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(38px, 4.5vw, 60px)',
            fontWeight: 700,
            lineHeight: 1.08,
            color: 'var(--navy)',
            marginBottom: '18px',
          }}
        >
          De l'idée à la réussite,
          <em
            style={{
              color: 'var(--gold)',
              fontStyle: 'italic',
              display: 'block',
            }}
          >
            nous construisons votre avenir
          </em>
        </h1>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '440px',
            marginBottom: '36px',
            fontWeight: 300,
          }}
        >
          Accompagnement sur-mesure pour la création de votre entreprise,
          l'obtention d'exonérations fiscales et la réponse aux appels d'offres.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <Link
            href="/devis"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              background: 'var(--navy)',
              color: 'var(--white)',
              padding: '14px 30px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(10,26,47,0.2)',
              transition: 'all 0.25s',
            }}
          >
            Démarrer mon projet
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              border: '1.5px solid var(--gold)',
              color: 'var(--gold)',
              background: 'transparent',
              padding: '14px 30px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
          >
            Découvrir nos services
          </Link>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: 'flex',
            gap: '28px',
            background: 'rgba(255,255,255,0.75)',
            border: '1px solid var(--gold-border)',
            borderRadius: '14px',
            padding: '20px 28px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 24px rgba(201,168,76,0.08)',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {i > 0 && (
                <div
                  style={{ width: '1px', height: '36px', background: 'var(--gold-border)' }}
                />
              )}
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-dim)',
                    marginTop: '5px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: service cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          position: 'relative',
          zIndex: 2,
          padding: '0 44px 0 0',
        }}
      >
        {serviceCards.map((svc, i) => (
          <Link
            key={i}
            href={svc.href}
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid var(--gold-border)',
              borderRadius: '18px',
              padding: '24px 20px',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.3s',
              boxShadow: '0 2px 16px rgba(201,168,76,0.06)',
              display: 'block',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-5px)';
              el.style.borderColor = 'var(--gold)';
              el.style.boxShadow = '0 12px 36px rgba(201,168,76,0.18)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.borderColor = 'var(--gold-border)';
              el.style.boxShadow = '0 2px 16px rgba(201,168,76,0.06)';
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--gold-light)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '14px',
              }}
            >
              <svc.icon size={20} color="var(--gold)" strokeWidth={1.8} />
            </div>
            <h4
              style={{
                fontSize: '13.5px',
                fontWeight: 500,
                color: 'var(--navy)',
                marginBottom: '5px',
                lineHeight: 1.3,
              }}
            >
              {svc.title}
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.5, fontWeight: 300 }}>
              {svc.desc}
            </p>
          </Link>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '28px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          zIndex: 3,
        }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
          Défiler
        </span>
        <div
          style={{
            width: '22px',
            height: '34px',
            border: '1px solid var(--gold-border)',
            borderRadius: '11px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <span
            style={{
              width: '2px',
              height: '5px',
              background: 'var(--gold)',
              borderRadius: '1px',
              animation: 'scroll-wheel 1.6s infinite',
              display: 'block',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid-wrap {
            grid-template-columns: 1fr !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
