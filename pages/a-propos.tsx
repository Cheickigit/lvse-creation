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

        {/* Blobs */}
        <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position:'relative', zIndex:1 }}>

          {/* Header */}
          <div style={{ textAlign:'center', maxWidth:'580px', margin:'0 auto 60px' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', fontSize:'11px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px' }}>
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
              Qui sommes-nous
              <span style={{ width:'32px', height:'1px', background:'var(--gold-border)', display:'block' }} />
            </div>
            <h1 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(32px, 4vw, 50px)', fontWeight:700, color:'var(--navy)', lineHeight:1.1, marginBottom:'14px' }}>
              À propos de<br />
              <em style={{ color:'var(--gold)', fontStyle:'italic' }}>LVSE CRÉATION</em>
            </h1>
            <p style={{ fontSize:'15px', color:'var(--text-muted)', lineHeight:1.75, fontWeight:300 }}>
              Votre partenaire de confiance pour la réussite de votre projet entrepreneurial au Burkina Faso.
            </p>
          </div>

          {/* Notre histoire */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px', marginBottom:'24px', alignItems:'stretch' }}>
            <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'20px', padding:'36px', boxShadow:'var(--shadow-sm)', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />
              <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'26px', fontWeight:700, color:'var(--navy)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'10px' }}>
                <span style={{ width:'3px', height:'24px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                Notre histoire
              </h2>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.85, fontWeight:300, marginBottom:'16px' }}>
                LVSE CRÉATION est né d'une vision : accompagner les entrepreneurs burkinabè à concrétiser leurs projets avec succès. Forts de plus de 15 ans d'expérience dans le domaine juridique et fiscal, nous avons développé une expertise pointue dans la création d'entreprise et l'optimisation fiscale.
              </p>
              <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.85, fontWeight:300 }}>
                Notre mission est de simplifier les démarches administratives et de sécuriser votre projet pour vous permettre de vous concentrer sur l'essentiel : développer votre activité.
              </p>
            </div>

            {/* Citation */}
            <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'20px', padding:'36px', display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden' }}>
              <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'200px', height:'200px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.1)', pointerEvents:'none' }} />
              <div style={{ position:'absolute', top:'-20px', right:'-20px', width:'120px', height:'120px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.07)', pointerEvents:'none' }} />
              <div style={{ width:'40px', height:'3px', background:'var(--gold)', borderRadius:'2px', marginBottom:'24px' }} />
              <blockquote style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'22px', fontWeight:600, color:'var(--white)', lineHeight:1.45, fontStyle:'italic', marginBottom:'24px', position:'relative' }}>
                "Nous ne créons pas seulement des entreprises, nous construisons des réussites durables."
              </blockquote>
              <span style={{ fontSize:'13px', color:'var(--gold)', fontWeight:500, letterSpacing:'0.04em' }}>— LVSE CRÉATION</span>
            </div>
          </div>

          {/* Stats */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'16px', marginBottom:'24px' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'16px', padding:'24px 20px', textAlign:'center', boxShadow:'var(--shadow-sm)', transition:'all 0.25s' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--gold)'; el.style.transform='translateY(-3px)'; el.style.boxShadow='var(--shadow-gold)'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(201,168,76,0.18)'; el.style.transform='translateY(0)'; el.style.boxShadow='var(--shadow-sm)'; }}
              >
                <div style={{ width:'44px', height:'44px', borderRadius:'11px', background:'var(--gold-light)', border:'1px solid var(--gold-border)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 14px' }}>
                  <stat.icon size={20} color="var(--gold)" strokeWidth={1.7} />
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'30px', fontWeight:700, color:'var(--gold)', lineHeight:1, marginBottom:'6px' }}>{stat.value}</div>
                <div style={{ fontSize:'12px', color:'var(--text-dim)', letterSpacing:'0.04em' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Valeurs */}
          <div style={{ background:'var(--white)', border:'1px solid rgba(201,168,76,0.18)', borderRadius:'20px', padding:'36px', marginBottom:'24px', boxShadow:'var(--shadow-sm)' }}>
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'26px', fontWeight:700, color:'var(--navy)', marginBottom:'24px', display:'flex', alignItems:'center', gap:'10px' }}>
              <span style={{ width:'3px', height:'24px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
              Nos valeurs
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'16px' }}>
              {valeurs.map((v, i) => (
                <div key={i} style={{ padding:'20px', background:'var(--off)', borderRadius:'12px', border:'1px solid rgba(201,168,76,0.1)', transition:'all 0.2s' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--gold-border)'; el.style.background='var(--gold-light)'; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(201,168,76,0.1)'; el.style.background='var(--off)'; }}
                >
                  <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'17px', fontWeight:600, color:'var(--navy)', marginBottom:'7px' }}>{v.title}</div>
                  <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.65, fontWeight:300, margin:0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ background:'var(--navy)', border:'1px solid var(--gold)', borderRadius:'20px', padding:'40px', textAlign:'center', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'280px', height:'280px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.08)', pointerEvents:'none' }} />
            <h2 style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'clamp(24px, 3vw, 36px)', fontWeight:700, color:'var(--white)', marginBottom:'12px', position:'relative' }}>
              Prêt à démarrer votre projet ?
            </h2>
            <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.5)', marginBottom:'28px', lineHeight:1.75, fontWeight:300, maxWidth:'480px', margin:'0 auto 28px', position:'relative' }}>
              Contactez-nous dès aujourd'hui pour un accompagnement personnalisé et un premier échange gratuit.
            </p>
            <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap', position:'relative' }}>
              <Link
                href="/devis"
                style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'var(--gold)', color:'var(--navy)', padding:'13px 28px', borderRadius:'8px', fontSize:'13px', fontWeight:600, textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity='0.9'; (e.currentTarget as HTMLElement).style.transform='translateY(-1px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity='1'; (e.currentTarget as HTMLElement).style.transform='translateY(0)'; }}
              >
                Demander un devis <ArrowRight size={14} />
              </Link>
              <WhatsAppButton service="general" label="Nous contacter" variant="outline" size="md" />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
