import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Users, Target, Award, Heart, ArrowRight } from 'lucide-react';

const stats = [
  { icon: Users,  value: '100+', label: 'Entreprises créées' },
  { icon: Target, value: '15+',  label: "Années d'expérience" },
  { icon: Award,  value: '98%',  label: 'Clients satisfaits' },
  { icon: Heart,  value: '24/7', label: 'Support disponible' },
];

const valeurs = [
  { title: 'Excellence',     desc: "Nous visons la perfection dans chaque dossier, chaque conseil, chaque accompagnement." },
  { title: 'Intégrité',      desc: "Transparence et honnêteté sont les fondements de notre relation avec nos clients." },
  { title: 'Proximité',      desc: "Nous nous engageons à être disponibles et réactifs à chaque étape de votre projet." },
  { title: 'Expertise',      desc: "15 ans d'expérience dans le droit des affaires et la fiscalité burkinabè." },
];

export default function APropos() {
  return (
    <>
      <Head>
        <title>À propos | LVSE CRÉATION</title>
        <meta name="description" content="Découvrez LVSE CRÉATION, votre partenaire de confiance pour la création d'entreprise au Burkina Faso." />
      </Head>

      <Header />

      <main style={{ paddingTop: '108px', paddingBottom: '90px', background: 'var(--off)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div className="container-custom" style={{ position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', maxWidth:'580px', margin:'0 auto 60px' }}>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 50px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'14px' }}>
              À propos de<br />
              <em style={{ color:'var(--gold)', fontStyle:'italic' }}>LVSE CRÉATION</em>
            </h1>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.75, fontWeight:300 }}>
              Votre partenaire de confiance pour la réussite de votre projet entrepreneurial au Burkina Faso.
            </p>
          </div>

          {/* GRILLE HISTOIRE */}
          <div className="about-story-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', marginBottom:'24px', alignItems:'stretch' }}>
            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'20px', padding:'36px', boxShadow:'var(--shadow-sm)' }}>
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'26px', fontWeight:700, color:'var(--navy)', marginBottom:'16px' }}>
                Notre histoire
              </h2>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.85, fontWeight:300, marginBottom:'16px' }}>
                LVSE CRÉATION est né d'une vision : accompagner les entrepreneurs burkinabè à concrétiser leurs projets avec succès. Forts de plus de 15 ans d'expérience dans le domaine juridique et fiscal, nous avons développé une expertise pointue dans la création d'entreprise et l'optimisation fiscale.
              </p>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.85, fontWeight:300 }}>
                Notre mission est de simplifier les démarches administratives et de sécuriser votre projet pour vous permettre de vous concentrer sur l'essentiel : développer votre activité.
              </p>
            </div>

            <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'20px', padding:'36px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <blockquote style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'22px', fontWeight:600, color:'var(--white)', lineHeight:1.45, fontStyle:'italic', marginBottom:'24px' }}>
                "Nous ne créons pas seulement des entreprises, nous construisons des réussites durables."
              </blockquote>
              <span style={{ fontSize:'13px', color:'var(--gold)', fontWeight:500 }}>— LVSE CRÉATION</span>
            </div>
          </div>

          {/* GRILLE STATS */}
          <div className="about-stats-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'16px', marginBottom:'24px' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'16px', padding:'24px 20px', textAlign:'center', boxShadow:'var(--shadow-sm)' }}>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'30px', fontWeight:700, color:'var(--gold)', lineHeight:1, marginBottom:'6px' }}>{stat.value}</div>
                <div style={{ fontSize:'12px', color:'var(--text-dim)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* GRILLE VALEURS */}
          <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'20px', padding:'36px', marginBottom:'24px', boxShadow:'var(--shadow-sm)' }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'26px', fontWeight:700, color:'var(--navy)', marginBottom:'24px' }}>
              Nos valeurs
            </h2>
            <div className="about-values-grid" style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'16px' }}>
              {valeurs.map((v, i) => (
                <div key={i} style={{ padding:'20px', background:'var(--off)', borderRadius:'12px', border:'1px solid rgba(201,168,76,0.1)' }}>
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'17px', fontWeight:600, color:'var(--navy)', marginBottom:'7px' }}>{v.title}</div>
                  <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.65, fontWeight:300, margin:0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .about-story-grid, .about-values-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .about-story-grid > div, .about-values-grid > div, .about-stats-grid > div {
            padding: 24px 20px !important; /* Marges mobiles réduites */
          }
          .about-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
