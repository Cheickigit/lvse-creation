import Link from 'next/link';
import { ArrowLeft, CheckCircle, type LucideIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { type ServiceKey } from '@/utils/whatsapp';

interface Step {
  title: string;
  desc: string;
}

interface ServicePageProps {
  serviceKey: ServiceKey;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  tag: string;
  intro: string;
  accompagnementText: string;
  features: string[];
  steps?: Step[];
  metaTitle: string;
  metaDesc: string;
}

export default function ServicePage({
  serviceKey,
  icon: Icon,
  title,
  subtitle,
  tag,
  intro,
  accompagnementText,
  features,
  steps,
  metaTitle,
  metaDesc,
}: ServicePageProps) {
  return (
    <>
      <Header />

      <main
        style={{
          paddingTop: '108px',
          paddingBottom: '90px',
          background: 'var(--off)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background blobs */}
        <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position:'relative', zIndex:1 }}>

          {/* Breadcrumb */}
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              fontSize: '13px',
              color: 'var(--gold)',
              textDecoration: 'none',
              marginBottom: '36px',
              fontWeight: 400,
              transition: 'gap 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = '11px')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = '7px')}
          >
            <ArrowLeft size={16} />
            Retour aux services
          </Link>

          {/* Main grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: '32px',
              alignItems: 'start',
            }}
          >
            {/* ── Left content ── */}
            <div>
              {/* Hero card */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderRadius: '20px',
                  padding: '40px 40px 36px',
                  marginBottom: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {/* Top accent */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />

                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    background: 'var(--gold-light)',
                    color: 'var(--gold)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    border: '1px solid var(--gold-border)',
                    marginBottom: '20px',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>

                {/* Icon + Title */}
                <div style={{ display:'flex', alignItems:'flex-start', gap:'20px', marginBottom:'16px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      background: 'var(--gold-light)',
                      border: '1px solid var(--gold-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={28} color="var(--gold)" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h1
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 'clamp(26px, 3.5vw, 40px)',
                        fontWeight: 700,
                        color: 'var(--navy)',
                        lineHeight: 1.1,
                        marginBottom: '8px',
                      }}
                    >
                      {title}
                    </h1>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Accompagnement */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '16px',
                  padding: '32px 36px',
                  marginBottom: '20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                  Notre accompagnement
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                  {accompagnementText}
                </p>
              </div>

              {/* Features */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '16px',
                  padding: '32px 36px',
                  marginBottom: steps ? '20px' : '0',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--navy)',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                  Ce que nous vous apportons
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                  }}
                >
                  {features.map((feat, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '12px 14px',
                        background: 'var(--off)',
                        borderRadius: '10px',
                        border: '1px solid rgba(201,168,76,0.1)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'var(--gold-border)';
                        el.style.background = 'var(--gold-light)';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = 'rgba(201,168,76,0.1)';
                        el.style.background = 'var(--off)';
                      }}
                    >
                      <CheckCircle size={16} color="var(--gold)" strokeWidth={1.8} style={{ flexShrink:0, marginTop:'1px' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-dark)', lineHeight: 1.5 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps (optional) */}
              {steps && steps.length > 0 && (
                <div
                  style={{
                    background: 'var(--white)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    borderRadius: '16px',
                    padding: '32px 36px',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '22px',
                      fontWeight: 600,
                      color: 'var(--navy)',
                      marginBottom: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                    Comment ça se passe ?
                  </h2>
                  <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                    {steps.map((step, i) => (
                      <div key={i} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                        <div
                          style={{
                            width: '32px', height: '32px',
                            borderRadius: '50%',
                            background: 'var(--gold-light)',
                            border: '1px solid var(--gold-border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexShrink: 0,
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: '15px',
                            fontWeight: 700,
                            color: 'var(--gold)',
                          }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div style={{ fontSize:'14px', fontWeight:500, color:'var(--navy)', marginBottom:'3px' }}>{step.title}</div>
                          <div style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, fontWeight:300 }}>{step.desc}</div>
                        </div>
                        {i < steps.length - 1 && (
                          <div style={{ position:'absolute', marginLeft:'15px', marginTop:'32px', width:'1px', height:'16px', background:'var(--gold-border)' }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right sticky sidebar ── */}
            <div style={{ position:'sticky', top:'88px', display:'flex', flexDirection:'column', gap:'14px' }}>

              {/* CTA card */}
              <div
                style={{
                  background: 'var(--navy)',
                  border: '1px solid var(--gold)',
                  borderRadius: '18px',
                  padding: '28px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'180px', height:'180px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.1)', pointerEvents:'none' }} />
                <div style={{ position:'absolute', top:'-20px', right:'-20px', width:'100px', height:'100px', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.08)', pointerEvents:'none' }} />

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--white)',
                    marginBottom: '8px',
                    position: 'relative',
                  }}
                >
                  Prêt à démarrer ?
                </h3>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', marginBottom:'22px', lineHeight:1.65, fontWeight:300, position:'relative' }}>
                  Contactez-nous pour un premier échange gratuit et sans engagement.
                </p>

                <div style={{ display:'flex', flexDirection:'column', gap:'10px', position:'relative' }}>
                  <Link
                    href="/devis"
                    style={{
                      display: 'block',
                      background: 'var(--gold)',
                      color: 'var(--navy)',
                      textAlign: 'center',
                      padding: '13px',
                      borderRadius: '9px',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      letterSpacing: '0.03em',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity='0.9'; (e.currentTarget as HTMLElement).style.transform='translateY(-1px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity='1'; (e.currentTarget as HTMLElement).style.transform='translateY(0)'; }}
                  >
                    Demander un devis
                  </Link>
                  <WhatsAppButton
                    service={serviceKey}
                    label="Discuter sur WhatsApp"
                    variant="outline"
                    size="md"
                    fullWidth
                  />
                </div>
              </div>

              {/* Info card */}
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid rgba(201,168,76,0.18)',
                  borderRadius: '16px',
                  padding: '22px 20px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ fontSize:'12px', color:'var(--text-dim)', marginBottom:'14px', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:500 }}>
                  Pourquoi nous choisir
                </div>
                {[
                  { val: '15+', lbl: "années d'expérience" },
                  { val: '100+', lbl: 'entreprises créées' },
                  { val: '98%', lbl: 'clients satisfaits' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 0',
                      borderBottom: i < 2 ? '1px solid rgba(201,168,76,0.1)' : 'none',
                    }}
                  >
                    <span style={{ fontSize:'13px', color:'var(--text-muted)', fontWeight:300 }}>{stat.lbl}</span>
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--gold)',
                      }}
                    >
                      {stat.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Other services */}
              <div
                style={{
                  background: 'var(--cream)',
                  border: '1px solid var(--gold-border)',
                  borderRadius: '16px',
                  padding: '20px',
                }}
              >
                <div style={{ fontSize:'11px', color:'var(--text-dim)', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:500, marginBottom:'12px' }}>
                  Autres services
                </div>
                {[
                  { label: 'Création de société',     href: '/services/creation-societe' },
                  { label: 'Exonération fiscale',      href: '/services/exoneration-fiscale' },
                  { label: "Montage d'appel d'offres", href: '/services/montage-dossier' },
                  { label: 'Analyse du DAO',           href: '/services/analyse-dao' },
                ]
                  .filter((s) => !s.href.includes(serviceKey))
                  .map((s, i) => (
                    <Link
                      key={i}
                      href={s.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        padding: '8px 0',
                        borderBottom: '1px solid rgba(201,168,76,0.08)',
                        transition: 'color 0.2s, gap 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color='var(--gold)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color='var(--text-muted)'; }}
                    >
                      <span style={{ width:'4px', height:'4px', borderRadius:'50%', background:'var(--gold-border)', display:'block', flexShrink:0 }} />
                      {s.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
