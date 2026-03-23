import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Shield, FileText, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'creation-societe',
    number: '01',
    icon: Building2,
    title: 'Création de société et entreprise',
    description: "De l'idée à l'immatriculation, nous prenons en charge l'intégralité du processus de création d'entreprise.",
    features: ['Statuts sur-mesure', 'Immatriculation rapide', 'Conseil juridique personnalisé'],
  },
  {
    id: 'exoneration-fiscale',
    number: '02',
    icon: Shield,
    title: "Obtention d'exonération fiscale",
    description: "Analyse approfondie de votre éligibilité aux dispositifs d'exonération fiscale en vigueur.",
    features: ['Optimisation fiscale', 'Protection des associés', 'Dossier sécurisé'],
  },
  {
    id: 'montage-dossier',
    number: '03',
    icon: FileText,
    title: "Montage de dossier d'appel d'offres",
    description: 'Préparation et constitution complète de vos dossiers de candidature pour remporter les marchés.',
    features: ['Dossier complet', 'Réponse technique optimisée', 'Optimisation financière'],
  },
  {
    id: 'analyse-dao',
    number: '04',
    icon: BarChart,
    title: 'Analyse du DAO',
    description: "Étude approfondie des Dossiers d'Appel d'Offres pour maximiser vos opportunités stratégiques.",
    features: ['Analyse stratégique', 'Identification des risques', 'Recommandations gagnantes'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Nos services | LVSE CRÉATION</title>
        <meta name="description" content="Découvrez nos services : création d'entreprise, exonération fiscale, montage d'appel d'offres et analyse DAO." />
      </Head>

      <Header />

      <main style={{ paddingTop: '108px', paddingBottom: '90px', background: 'var(--off)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Blobs décoratifs */}
        <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign:'center', maxWidth:'580px', margin:'0 auto 56px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px' }}>
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
              Ce que nous faisons
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 50px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'14px' }}>
              Nos services
            </h1>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.75, fontWeight:300 }}>
              Des solutions complètes et personnalisées pour concrétiser votre projet entrepreneurial au Burkina Faso.
            </p>
          </div>

          {/* Cards grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'20px', maxWidth:'900px', margin:'0 auto' }}>
            {services.map((svc) => (
              <div
                key={svc.id}
                style={{ position:'relative', overflow:'hidden', borderRadius:'20px', padding:'32px 28px', background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', boxShadow:'var(--shadow-sm)', transition:'all 0.3s' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(-5px)';
                  el.style.borderColor = 'var(--gold)';
                  el.style.boxShadow = 'var(--shadow-gold-lg)';
                  const bar = el.querySelector('.top-bar') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleX(1)';
                  const icon = el.querySelector('.svc-icon') as HTMLElement;
                  if (icon) { icon.style.background = 'var(--gold-mid)'; icon.style.borderColor = 'var(--gold)'; }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = 'rgba(201,168,76,0.18)';
                  el.style.boxShadow = 'var(--shadow-sm)';
                  const bar = el.querySelector('.top-bar') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleX(0)';
                  const icon = el.querySelector('.svc-icon') as HTMLElement;
                  if (icon) { icon.style.background = 'var(--gold-light)'; icon.style.borderColor = 'var(--gold-border)'; }
                }}
              >
                {/* Barre top animée */}
                <div
                  className="top-bar"
                  style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.3))', transform:'scaleX(0)', transformOrigin:'left', transition:'transform 0.35s ease' }}
                />

                {/* Numéro filigrane */}
                <span style={{ position:'absolute', top:'18px', right:'22px', fontFamily:"'Cormorant Garamond', serif", fontSize:'54px', fontWeight:700, color:'rgba(201,168,76,0.07)', lineHeight:1, userSelect:'none' }}>
                  {svc.number}
                </span>

                {/* Icône */}
                <div
                  className="svc-icon"
                  style={{ width:'50px', height:'50px', borderRadius:'13px', background:'var(--gold-light)', border:'1px solid var(--gold-border)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'18px', transition:'all 0.3s' }}
                >
                  <svc.icon size={22} color="var(--gold)" strokeWidth={1.7} />
                </div>

                {/* Titre */}
                <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'20px', fontWeight:600, color:'var(--navy)', lineHeight:1.25, marginBottom:'10px', paddingRight:'44px' }}>
                  {svc.title}
                </h2>

                {/* Description */}
                <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.7, fontWeight:300, marginBottom:'18px' }}>
                  {svc.description}
                </p>

                {/* Séparateur */}
                <div style={{ height:'1px', background:'linear-gradient(90deg, var(--gold-border), transparent)', marginBottom:'16px' }} />

                {/* Features */}
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'7px', marginBottom:'22px' }}>
                  {svc.features.map((feat, i) => (
                    <li key={i} style={{ display:'flex', alignItems:'center', gap:'9px', fontSize:'12.5px', color:'var(--text-muted)' }}>
                      <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--gold)', flexShrink:0, display:'block' }} />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/services/${svc.id}`}
                  style={{ display:'inline-flex', alignItems:'center', gap:'6px', fontSize:'12.5px', fontWeight:500, color:'var(--gold)', textDecoration:'none', borderBottom:'1px solid transparent', paddingBottom:'1px', transition:'gap 0.2s, border-color 0.2s' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.gap='10px'; el.style.borderBottomColor='var(--gold-border)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.gap='6px'; el.style.borderBottomColor='transparent'; }}
                >
                  En savoir plus
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}