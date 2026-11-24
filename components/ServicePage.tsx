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
        <div style={{ position:'absolute', top:'-80px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-60px', left:'-60px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents:'none' }} />

        <div className="container-custom" style={{ position:'relative', zIndex:1 }}>
          <Link
            href="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: 'var(--gold)', textDecoration: 'none', marginBottom: '36px', fontWeight: 400, transition: 'gap 0.2s', letterSpacing: '0.02em' }}
          >
            <ArrowLeft size={16} /> Retour aux services
          </Link>

          {/* GRILLE PRINCIPALE */}
          <div className="service-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'start' }}>
            
            {/* ── Left content ── */}
            <div>
              <div style={{ background: 'var(--white)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '20px', padding: '40px 40px 36px', marginBottom: '20px', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--gold), rgba(201,168,76,0.2))' }} />
                <span style={{ display: 'inline-block', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--gold-light)', color: 'var(--gold)', padding: '3px 10px', borderRadius: '20px', border: '1px solid var(--gold-border)', marginBottom: '20px', fontWeight: 500 }}>
                  {tag}
                </span>
                <div style={{ display:'flex', alignItems:'flex-start', gap:'20px', marginBottom:'16px' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '14px', background: 'var(--gold-light)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={28} color="var(--gold)" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '8px' }}>
                      {title}
                    </h1>
                    <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300 }}>
                      {subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '16px', padding: '32px 36px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                  Notre accompagnement
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                  {accompagnementText}
                </p>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '16px', padding: '32px 36px', marginBottom: steps ? '20px' : '0', boxShadow: 'var(--shadow-sm)' }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                  Ce que nous vous apportons
                </h2>
                {/* GRILLE FEATURES */}
                <div className="service-features-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 14px', background: 'var(--off)', borderRadius: '10px', border: '1px solid rgba(201,168,76,0.1)' }}>
                      <CheckCircle size={16} color="var(--gold)" strokeWidth={1.8} style={{ flexShrink:0, marginTop:'1px' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-dark)', lineHeight: 1.5 }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {steps && steps.length > 0 && (
                <div style={{ background: 'var(--white)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '16px', padding: '32px 36px', boxShadow: 'var(--shadow-sm)' }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 600, color: 'var(--navy)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ width:'3px', height:'22px', background:'var(--gold)', borderRadius:'2px', display:'block', flexShrink:0 }} />
                    Comment ça se passe ?
                  </h2>
                  <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                    {steps.map((step, i) => (
                      <div key={i} style={{ display:'flex', gap:'16px', alignItems:'flex-start' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gold-light)', border: '1px solid var(--gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 700, color: 'var(--gold)' }}>
                          {i + 1}
                        </div>
                        <div>
                          <div style={{ fontSize:'14px', fontWeight:500, color:'var(--navy)', marginBottom:'3px' }}>{step.title}</div>
                          <div style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, fontWeight:300 }}>{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right sticky sidebar ── */}
            <div style={{ position:'sticky', top:'88px', display:'flex', flexDirection:'column', gap:'14px' }}>
              <div style={{ background: 'var(--navy)', border: '1px solid var(--gold)', borderRadius: '18px', padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: 'var(--white)', marginBottom: '8px' }}>
                  Prêt à démarrer ?
                </h3>
                <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', marginBottom:'22px', lineHeight:1.65, fontWeight:300 }}>
                  Contactez-nous pour un premier échange gratuit et sans engagement.
                </p>
                <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                  <Link href="/devis" style={{ display: 'block', background: 'var(--gold)', color: 'var(--navy)', textAlign: 'center', padding: '13px', borderRadius: '9px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
                    Demander un devis
                  </Link>
                  <WhatsAppButton service={serviceKey} label="Discuter sur WhatsApp" variant="outline" size="md" fullWidth />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @media (max-width: 900px) {
          .service-layout {
            grid-template-columns: 1fr !important;
          }
          .service-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 500px) {
          .service-layout > div > div {
            padding: 24px 20px !important; /* Réduit les marges internes sur mobile */
          }
          .service-layout > div > div > div {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </>
  );
}
