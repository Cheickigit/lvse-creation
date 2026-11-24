'use client';

import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Send } from 'lucide-react';
import { type ServiceKey } from '@/utils/whatsapp';

const serviceOptions: { value: ServiceKey; label: string }[] = [
  { value: 'creation-societe',    label: 'Création de société et entreprise' },
  { value: 'exoneration-fiscale', label: "Obtention d'exonération fiscale" },
  { value: 'montage-dossier',     label: "Montage de dossier d'appel d'offres" },
  { value: 'analyse-dao',         label: 'Analyse du DAO' },
];

export default function Devis() {
  const [selectedService, setSelectedService] = useState<ServiceKey | ''>('');

  return (
    <>
      <Head>
        <title>Demande de devis | LVSE CRÉATION</title>
      </Head>
      <Header />

      <main style={{ paddingTop: '108px', paddingBottom: '90px', background: 'var(--off)', minHeight: '100vh' }}>
        <div className="container-custom" style={{ maxWidth: '920px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 48px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'12px' }}>
              Demander un devis
            </h1>
          </div>

          {/* GRILLE DEVIS */}
          <div className="devis-layout" style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:'24px', alignItems:'start' }}>
            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'20px', padding:'36px 32px', boxShadow:'var(--shadow-sm)' }}>
              <form action="https://formspree.io/f/mwvrjkpl" method="POST" target="_blank">
                {/* GRILLE NOM/EMAIL */}
                <div className="devis-form-row" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
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
                  <label style={labelStyle}>Téléphone *</label>
                  <input type="tel" name="phone" required style={inputStyle} />
                </div>
                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>Service souhaité *</label>
                  <select name="service" required value={selectedService} onChange={(e) => setSelectedService(e.target.value as ServiceKey)} style={inputStyle}>
                    <option value="">Sélectionnez un service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div style={{ marginBottom:'24px' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" rows={5} style={{ ...inputStyle, minHeight:'120px' }} />
                </div>
                <button type="submit" style={{ width:'100%', background:'var(--navy)', color:'var(--white)', padding:'14px', borderRadius:'10px', fontSize:'13px', fontWeight:600, border:'none', cursor:'pointer' }}>
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'18px', padding:'26px 22px' }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'19px', fontWeight:600, color:'var(--white)', marginBottom:'18px' }}>
                Pourquoi nous choisir ?
              </h3>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.7)' }}>Réponse sous 24h ouvrées.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .devis-layout, .devis-form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .devis-layout > div {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </>
  );
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', marginBottom: '6px' };
const inputStyle: React.CSSProperties = { width: '100%', padding: '11px 14px', fontSize: '13.5px', color: 'var(--text-dark)', background: 'var(--off)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px', outline: 'none' };
