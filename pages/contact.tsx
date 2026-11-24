'use client';

import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { openWhatsApp, type ServiceKey } from '@/utils/whatsapp';

const contactCards = [
  { icon: MapPin,        label: 'Adresse',   value: "05 BV 30400 OUAGA PATTE D'OIE 10010, Ouagadougou" },
  { icon: Phone,         label: 'Téléphone', value: '+226 77 04 62 23', href: 'tel:+22677046223' },
  { icon: MessageCircle, label: 'WhatsApp',  value: '+226 77 04 62 23', isWhatsapp: true },
  { icon: Clock,         label: 'Horaires',  value: 'Lun–Ven : 8h–18h  ·  Sam : 9h–13h' },
];

const serviceOptions: { value: ServiceKey; label: string }[] = [
  { value: 'creation-societe',    label: 'Création de société et entreprise' },
  { value: 'exoneration-fiscale', label: "Obtention d'exonération fiscale" },
  { value: 'montage-dossier',     label: "Montage de dossier d'appel d'offres" },
  { value: 'analyse-dao',         label: 'Analyse du DAO' },
  { value: 'general',             label: 'Autre demande' },
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState<ServiceKey>('general');

  return (
    <>
      <Head>
        <title>Contact | LVSE CRÉATION</title>
      </Head>
      <Header />

      <main style={{ paddingTop:'108px', paddingBottom:'90px', background:'var(--off)', minHeight:'100vh' }}>
        <div className="container-custom">
          <div style={{ textAlign:'center', maxWidth:'560px', margin:'0 auto 56px' }}>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 48px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'14px' }}>
              Une question ?<br /><em style={{ color:'var(--gold)', fontStyle:'italic' }}>Parlons-en.</em>
            </h1>
          </div>

          {/* GRILLE CONTACT */}
          <div className="contact-layout" style={{ display:'grid', gridTemplateColumns:'1fr 1.7fr', gap:'24px', maxWidth:'1000px', margin:'0 auto', alignItems:'start' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {contactCards.map((card, i) => (
                <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'16px', background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'14px', padding:'18px 20px' }}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:'var(--gold-light)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <card.icon size={18} color="var(--gold)" />
                  </div>
                  <div>
                    <div style={{ fontSize:'11px', color:'var(--text-dim)', marginBottom:'4px' }}>{card.label}</div>
                    <div style={{ fontSize:'13.5px', color:'var(--navy)' }}>{card.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'20px', padding:'36px 32px', boxShadow:'var(--shadow-sm)' }}>
              <form action="https://formspree.io/f/xqeyokaw" method="POST" target="_blank">
                {/* GRILLE NOM/EMAIL */}
                <div className="contact-form-row" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
                  <div>
                    <label style={labelStyle}>Nom complet *</label>
                    <input type="text" name="name" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required style={inputStyle} />
                  </div>
                </div>
                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" rows={5} required style={{ ...inputStyle, minHeight:'120px' }} />
                </div>
                <button type="submit" style={{ width:'100%', background:'var(--navy)', color:'var(--white)', padding:'14px', borderRadius:'10px', fontSize:'13px', fontWeight:600, border:'none', cursor:'pointer' }}>
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-layout, .contact-form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .contact-layout > div {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = { display:'block', fontSize:'12px', fontWeight:500, color:'var(--text-muted)', marginBottom:'6px' };
const inputStyle: React.CSSProperties = { width:'100%', padding:'11px 14px', fontSize:'13.5px', color:'var(--text-dark)', background:'var(--off)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'10px', outline:'none' };
