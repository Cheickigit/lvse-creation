'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, type ServiceKey } from '@/utils/whatsapp';

interface WhatsAppButtonProps {
  service?: ServiceKey;
  label?: string;
  variant?: 'gold' | 'navy' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function WhatsAppButton({
  service = 'general',
  label = 'WhatsApp direct',
  variant = 'gold',
  size = 'md',
  fullWidth = false,
}: WhatsAppButtonProps) {
  const [link, setLink] = useState('#');

  // Génère le lien côté client pour avoir l'URL courante
  useEffect(() => {
    setLink(getWhatsAppLink(service));
  }, [service]);

  const sizeStyles = {
    sm: { padding: '8px 14px', fontSize: '12px', gap: '6px' },
    md: { padding: '11px 20px', fontSize: '13px', gap: '8px' },
    lg: { padding: '14px 28px', fontSize: '14px', gap: '9px' },
  };

  const variantStyles = {
    gold: {
      background: 'var(--gold)',
      color: 'var(--navy)',
      border: 'none',
    },
    navy: {
      background: 'var(--navy)',
      color: 'var(--white)',
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold)',
      border: '1.5px solid var(--gold)',
    },
  };

  const hoverStyles = {
    gold:    { background: 'var(--gold-hover)', transform: 'translateY(-1px)', boxShadow: '0 6px 20px rgba(201,168,76,0.3)' },
    navy:    { background: 'var(--navy2)',       transform: 'translateY(-1px)', boxShadow: '0 6px 20px rgba(10,26,47,0.25)' },
    outline: { background: 'rgba(201,168,76,0.08)', transform: 'translateY(-1px)', boxShadow: 'none' },
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : 'auto',
        borderRadius: '8px',
        fontWeight: 600,
        letterSpacing: '0.03em',
        textDecoration: 'none',
        transition: 'all 0.2s',
        cursor: 'pointer',
        fontFamily: "'DM Sans', sans-serif",
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        const h = hoverStyles[variant];
        el.style.background = h.background;
        el.style.transform = h.transform;
        el.style.boxShadow = h.boxShadow;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = variantStyles[variant].background;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      <MessageCircle size={size === 'sm' ? 13 : size === 'md' ? 15 : 17} />
      <span style={{ marginLeft: size === 'sm' ? '5px' : '7px' }}>{label}</span>
      <ArrowRight size={size === 'sm' ? 11 : 13} style={{ marginLeft: '2px' }} />
    </a>
  );
}
