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
        <meta name="description" content="Contactez LVSE CRÉATION pour vos besoins en création d'entreprise et exonération fiscale au Burkina Faso." />
      </Head>
      <Header />

      <main style={{ paddingTop:'108px', paddingBottom:'90px', background:'var(--off)', minHeight:'100vh', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-100px', right:'-120px', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position:'relative', zIndex:1 }}>

          {/* Header */}
          <div style={{ textAlign:'center', maxWidth:'560px', margin:'0 auto 56px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px' }}>
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
              Nous contacter
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 48px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'14px' }}>
              Une question ?<br />
              <em style={{ color:'var(--gold)', fontStyle:'italic' }}>Parlons-en.</em>
            </h1>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.75, fontWeight:300 }}>
              Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.7fr', gap:'24px', maxWidth:'1000px', margin:'0 auto', alignItems:'start' }}>

            {/* Left */}
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {contactCards.map((card, i) => (
                <div
                  key={i}
                  onClick={() => {
                    if (card.href) window.open(card.href, '_blank');
                    if (card.isWhatsapp) openWhatsApp(selectedService);
                  }}
                  style={{ display:'flex', alignItems:'flex-start', gap:'16px', background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'14px', padding:'18px 20px', boxShadow:'var(--shadow-sm)', transition:'all 0.25s', cursor:(card.href || card.isWhatsapp) ? 'pointer' : 'default' }}
                  onMouseEnter={(e) => {
                    if (!card.href && !card.isWhatsapp) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--gold)'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = 'var(--shadow-gold)';
                  }}
                  onMouseLeave={(e) => {
                    if (!card.href && !card.isWhatsapp) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(201,168,76,0.18)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:'var(--gold-light)', border:'1px solid var(--gold-border)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <card.icon size={18} color="var(--gold)" strokeWidth={1.7} />
                  </div>
                  <div>
                    <div style={{ fontSize:'11px', letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--text-dim)', marginBottom:'4px', fontWeight:500 }}>{card.label}</div>
                    <div style={{ fontSize:'13.5px', color:'var(--navy)', fontWeight:400, lineHeight:1.5 }}>{card.value}</div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA — service-aware */}
              <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'16px', padding:'22px 20px', marginTop:'4px' }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'19px', fontWeight:600, color:'var(--white)', marginBottom:'8px' }}>
                  Réponse rapide ?
                </h3>
                <p style={{ fontSize:'12.5px', color:'rgba(255,255,255,0.5)', marginBottom:'16px', lineHeight:1.65, fontWeight:300 }}>
                  Le service sélectionné et la page consultée seront inclus automatiquement dans votre message.
                </p>
                <WhatsAppButton service={selectedService} label="Ouvrir WhatsApp" variant="gold" size="md" />
              </div>
            </div>

            {/* Right: form */}
            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.2)', borderRadius:'20px', padding:'36px 32px', boxShadow:'var(--shadow-sm)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />

              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'22px', fontWeight:600, color:'var(--navy)', marginBottom:'6px' }}>Envoyez-nous un message</h2>
              <p style={{ fontSize:'13px', color:'var(--text-dim)', marginBottom:'28px', fontWeight:300 }}>Nous vous répondons dans les 24h ouvrées.</p>

              <form action="https://formspree.io/f/xqeyokaw" method="POST" target="_blank">
                <input type="hidden" name="_subject" value="📧 Nouveau message - LVSE Contact" />

                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
                  <div>
                    <label style={labelStyle}>Nom complet *</label>
                    <input type="text" name="name" required style={inputStyle} onFocus={(e) => focusInput(e.currentTarget)} onBlur={(e) => blurInput(e.currentTarget)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input type="email" name="email" required style={inputStyle} onFocus={(e) => focusInput(e.currentTarget)} onBlur={(e) => blurInput(e.currentTarget)} />
                  </div>
                </div>

                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>Téléphone</label>
                  <input type="tel" name="phone" placeholder="+226 XX XX XX XX" style={inputStyle} onFocus={(e) => focusInput(e.currentTarget)} onBlur={(e) => blurInput(e.currentTarget)} />
                </div>

                {/* Service selector — synchronisé avec WhatsAppButton */}
                <div style={{ marginBottom:'14px' }}>
                  <label style={labelStyle}>
                    Service souhaité
                    <span style={{ marginLeft:'6px', fontSize:'10.5px', color:'var(--gold)', background:'var(--gold-light)', padding:'1px 7px', borderRadius:'10px', border:'1px solid var(--gold-border)' }}>
                      synchronisé WhatsApp
                    </span>
                  </label>
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value as ServiceKey)}
                    style={{ ...inputStyle, cursor:'pointer' }}
                    onFocus={(e) => focusInput(e.currentTarget)}
                    onBlur={(e) => blurInput(e.currentTarget)}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom:'24px' }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    name="message" rows={5} required
                    placeholder="Décrivez votre demande..."
                    style={{ ...inputStyle, resize:'vertical', minHeight:'120px' }}
                    onFocus={(e) => focusInput(e.currentTarget)}
                    onBlur={(e) => blurInput(e.currentTarget)}
                  />
                </div>

                <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                  <button
                    type="submit"
                    style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'center', gap:'9px', background:'var(--navy)', color:'var(--white)', padding:'14px', borderRadius:'10px', fontSize:'13px', fontWeight:600, letterSpacing:'0.04em', border:'none', cursor:'pointer', transition:'all 0.2s', fontFamily:"'DM Sans', sans-serif" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background='var(--navy2)'; el.style.transform='translateY(-1px)'; el.style.boxShadow='0 6px 20px rgba(10,26,47,0.25)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background='var(--navy)'; el.style.transform='translateY(0)'; el.style.boxShadow='none'; }}
                  >
                    <Send size={15} />
                    Envoyer le message
                  </button>

                  <div style={{ textAlign:'center', position:'relative', padding:'4px 0' }}>
                    <span style={{ fontSize:'12px', color:'var(--text-dim)', background:'var(--white)', padding:'0 10px', position:'relative', zIndex:1 }}>ou</span>
                    <div style={{ position:'absolute', top:'50%', left:0, right:0, height:'1px', background:'var(--gold-border)', zIndex:0 }} />
                  </div>

                  <WhatsAppButton
                    service={selectedService}
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display:'block', fontSize:'12px', fontWeight:500,
  color:'var(--text-muted)', marginBottom:'6px', letterSpacing:'0.02em',
};

const inputStyle: React.CSSProperties = {
  width:'100%', padding:'11px 14px', fontSize:'13.5px',
  color:'var(--text-dark)', background:'var(--off)',
  border:'1px solid rgba(201,168,76,0.2)', borderRadius:'10px',
  outline:'none', transition:'border-color 0.2s, box-shadow 0.2s',
  fontFamily:"'DM Sans', sans-serif",
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
