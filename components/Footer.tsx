import Link from 'next/link';
import { Phone, MapPin, MessageCircle, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Accueil',          href: '/' },
  { name: 'Services',         href: '/services' },
  { name: 'À propos',         href: '/a-propos' },
  { name: 'Contact',          href: '/contact' },
  { name: 'Demander un devis',href: '/devis' },
];

const serviceLinks = [
  { name: 'Création de société',    href: '/services/creation-societe' },
  { name: 'Exonération fiscale',    href: '/services/exoneration-fiscale' },
  { name: "Montage d'appel d'offres", href: '/services/montage-dossier' },
  { name: 'Analyse DAO',            href: '/services/analyse-dao' },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "05 BV 30400 OUAGA PATTE D'OIE 10010, Ouagadougou",
  },
  {
    icon: Phone,
    text: '+226 77 04 62 23',
  },
  {
    icon: MessageCircle,
    text: 'WhatsApp : +226 77 04 62 23',
    href: 'https://wa.me/22677046223?text=Bonjour%20LVSE%20CRÉATION%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services.',
  },
  {
    icon: Clock,
    text: 'Lun–Ven : 8h–18h  ·  Sam : 9h–13h',
  },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter,  href: '#', label: 'Twitter' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--navy)',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        padding: '56px 0 24px',
      }}
    >
      <div className="container-custom">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1fr 1.4fr',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: '14px',
                  letterSpacing: '0.03em',
                }}
              >
                LVSE<span style={{ color: 'var(--gold)' }}>CRÉATION</span>
              </div>
            </Link>
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.75,
                fontWeight: 300,
                marginBottom: '22px',
              }}
            >
              De l'idée à la réussite, votre partenaire de confiance pour l'entrepreneuriat
              et les appels d'offres au Burkina Faso.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(201,168,76,0.12)';
                    el.style.borderColor = 'var(--gold-border)';
                    el.style.color = 'var(--gold)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(255,255,255,0.05)';
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.color = 'rgba(255,255,255,0.4)';
                  }}
                >
                  <social.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 500,
                marginBottom: '18px',
              }}
            >
              Navigation
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '10px' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 500,
                marginBottom: '18px',
              }}
            >
              Nos services
            </h5>
            <ul style={{ listStyle: 'none' }}>
              {serviceLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '10px' }}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 500,
                marginBottom: '18px',
              }}
            >
              Contact
            </h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactInfo.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <item.icon
                    size={14}
                    color="var(--gold)"
                    strokeWidth={1.7}
                    style={{ flexShrink: 0, marginTop: '2px' }}
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '12.5px',
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.55,
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--gold)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/22677046223?text=Bonjour%20LVSE%20CRÉATION%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                marginTop: '20px',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid var(--gold-border)',
                color: 'var(--gold)',
                padding: '9px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(201,168,76,0.18)';
                el.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(201,168,76,0.1)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={14} />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            © {year} LVSE CRÉATION — Tous droits réservés
          </span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
            Réalisé par{' '}
            <a
              href="#"
              style={{ color: 'var(--gold)', textDecoration: 'none' }}
            >
              VisualCraft
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
