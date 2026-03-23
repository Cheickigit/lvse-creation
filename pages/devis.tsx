'use client';

import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Send, CheckCircle } from 'lucide-react';
import { type ServiceKey } from '@/utils/whatsapp';

const serviceOptions: { value: ServiceKey; label: string }[] = [
  { value: 'creation-societe',    label: 'Création de société et entreprise' },
  { value: 'exoneration-fiscale', label: "Obtention d'exonération fiscale" },
  { value: 'montage-dossier',     label: "Montage de dossier d'appel d'offres" },
  { value: 'analyse-dao',         label: 'Analyse du DAO' },
];

const avantages = [
  'Réponse sous 24h ouvrées',
  'Premier échange gratuit',
  'Devis personnalisé et sans engagement',
  'Accompagnement de bout en bout',
];

export default function Devis() {
  const [selectedService, setSelectedService] = useState<ServiceKey | ''>('');

  return (
    <>
      <Head>
        <title>Demande de devis | LVSE CRÉATION</title>
        <meta name="description" content="Demandez un devis personnalisé pour votre projet de création d'entreprise au Burkina Faso." />
      </Head>

      <Header />

      <main style={{ paddingTop: '108px', paddingBottom: '90px', background: 'var(--off)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Blobs décoratifs */}
        <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '920px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px' }}>
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
              Devis gratuit
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 48px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'12px' }}>
              Demander un devis
            </h1>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.75, fontWeight:300 }}>
              Remplissez le formulaire ci-dessous, nous vous contactons dans les plus brefs délais.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:'24px', alignItems:'start' }}>

            {/* Formulaire */}
            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'20px', padding:'36px 32px', boxShadow:'var(--shadow-sm)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />

              <form action="https://formspree.io/f/mwvrjkpl" method="POST" target="_blank">
                <input type="hidden" name="_subject" value="📋 Nouvelle demande de devis - LVSE" />

                {/* Nom + Email */}
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
                  <div>
                    <label style={labelStyle}>Nom complet *</label>
                    <input type="text" name="name" required style={inputStyle}
                      onFocus={(e) => focusInput(e.currentTarget)}
                      onBlur={(e) => blurInput(e.currentTarget)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required style={inputStyle}
                      onFocus={(e) => focusInput(e.currentTarget)}
                      onBlur={(e) => blurInput(e.currentTarget)} />
                  </div>
                </div>

                {/* Téléphone */}
                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>Téléphone *</label>
                  <input type="tel" name="phone" required placeholder="+226 XX XX XX XX" style={inputStyle}
                    onFocus={(e) => focusInput(e.currentTarget)}
                    onBlur={(e) => blurInput(e.currentTarget)} />
                </div>

                {/* Service — synchronisé WhatsApp */}
                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>
                    Service souhaité *
                    <span style={{ marginLeft:'6px', fontSize:'10.5px', color:'var(--gold)', background:'var(--gold-light)', padding:'1px 7px', borderRadius:'10px', border:'1px solid var(--gold-border)' }}>
                      synchronisé WhatsApp
                    </span>
                  </label>
                  <select
                    name="service"
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value as ServiceKey)}
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={(e) => focusInput(e.currentTarget)}
                    onBlur={(e) => blurInput(e.currentTarget)}
                  >
                    <option value="">Sélectionnez un service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom:'24px' }}>
                  <label style={labelStyle}>Message / Informations complémentaires</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    style={{ ...inputStyle, resize:'vertical', minHeight:'120px' }}
                    onFocus={(e) => focusInput(e.currentTarget)}
                    onBlur={(e) => blurInput(e.currentTarget)}
                  />
                </div>

                {/* Boutons */}
                <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                  <button
                    type="submit"
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:'9px', background:'var(--navy)', color:'var(--white)', padding:'14px', borderRadius:'10px', fontSize:'13px', fontWeight:600, letterSpacing:'0.04em', border:'none', cursor:'pointer', transition:'all 0.2s', fontFamily:"'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background='var(--navy2)'; el.style.transform='translateY(-1px)'; el.style.boxShadow='0 6px 20px rgba(10,26,47,0.25)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background='var(--navy)'; el.style.transform='translateY(0)'; el.style.boxShadow='none'; }}
                  >
                    <Send size={15} />
                    Envoyer ma demande
                  </button>

                  {/* Séparateur */}
                  <div style={{ textAlign:'center', position:'relative', padding:'4px 0' }}>
                    <span style={{ fontSize:'12px', color:'var(--text-dim)', background:'var(--white)', padding:'0 10px', position:'relative', zIndex:1 }}>ou</span>
                    <div style={{ position:'absolute', top:'50%', left:0, right:0, height:'1px', background:'var(--gold-border)', zIndex:0 }} />
                  </div>

                  <WhatsAppButton
                    service={selectedService || 'devis'}
                    label="Continuer sur WhatsApp"
                    variant="outline"
                    size="md"
                    fullWidth
                  />
                </div>

                <p style={{ fontSize:'11.5px', color:'var(--text-dim)', textAlign:'center', marginTop:'14px', lineHeight:1.6 }}>
                  En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div style={{ display:'flex', flexDirection:'column', gap:'14px', position:'sticky', top:'88px' }}>

              {/* Avantages */}
              <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'18px', padding:'26px 22px', position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:'-50px', right:'-50px', width:'160px', height:'160px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.1)', pointerEvents:'none' }} />
                <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'19px', fontWeight:600, color:'var(--white)', marginBottom:'18px', position:'relative' }}>
                  Pourquoi nous choisir ?
                </h3>
                <div style={{ display:'flex', flexDirection:'column', gap:'12px', position:'relative' }}>
                  {avantages.map((av, i) => (
                    <div key={i} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                      <CheckCircle size={15} color="var(--gold)" strokeWidth={2} style={{ flexShrink:0 }} />
                      <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.7)', lineHeight:1.5, fontWeight:300 }}>{av}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'16px', padding:'22px 20px', boxShadow:'var(--shadow-sm)' }}>
                <div style={{ fontSize:'11px', color:'var(--text-dim)', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:500, marginBottom:'14px' }}>
                  Notre bilan
                </div>
                {[
                  { val: '100+', lbl: 'Entreprises créées' },
                  { val: '15+',  lbl: "Années d'expérience" },
                  { val: '98%',  lbl: 'Clients satisfaits' },
                ].map((stat, i) => (
                  <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}>
                    <span style={{ fontSize:'13px', color:'var(--text-muted)', fontWeight:300 }}>{stat.lbl}</span>
                    <span style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'22px', fontWeight:700, color:'var(--gold)' }}>{stat.val}</span>
                  </div>
                ))}
              </div>

              {/* Contact direct */}
              <div style={{ background:'var(--cream)', border:'1px solid var(--gold-border)', borderRadius:'16px', padding:'20px' }}>
                <div style={{ fontSize:'12px', color:'var(--text-dim)', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:500, marginBottom:'10px' }}>
                  Préférez l'appel direct ?
                </div>
                <a href="tel:+22677046223" style={{ fontSize:'16px', fontFamily:"'Cormorant Garamond', serif", fontWeight:600, color:'var(--navy)', textDecoration:'none', display:'block', marginBottom:'10px' }}>
                  +226 77 04 62 23
                </a>
                <p style={{ fontSize:'12px', color:'var(--text-dim)', lineHeight:1.6, fontWeight:300 }}>
                  Lun–Ven : 8h–18h<br />Sam : 9h–13h
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: '12px', fontWeight: 500,
  color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.02em',
};

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px', fontSize: '13.5px',
  color: 'var(--text-dark)', background: 'var(--off)',
  border: '1px solid rgba(201,168,76,0.2)', borderRadius: '10px',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: "'DM Sans', sans-serif",
};

function focusInput(el: HTMLElement) {
  el.style.borderColor = 'var(--gold)';
  el.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.1)';
  el.style.background = 'var(--white)';
}
function blurInput(el: HTMLElement) {
  el.style.borderColor = 'rgba(201,168,76,0.2)';
  el.style.boxShadow = 'none';
  el.style.background = 'var(--off)';
}
