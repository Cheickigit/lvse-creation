import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const partners = [
  {
    id: 'rccm',
    name: 'RCCM Burkina Faso',
    tag: 'Institutionnel',
    description: "Registre du Commerce et du Crédit Mobilier — organisme officiel d'immatriculation des entreprises au Burkina Faso.",
    logo: '/logos/rccm.png',
    initials: 'RCCM',
  },
  {
    id: 'dgi',
    name: 'Direction Générale des Impôts',
    tag: 'Fiscal',
    description: "Partenaire clé pour l'obtention d'exonérations fiscales et la conformité fiscale des entreprises burkinabè.",
    logo: '/logos/dgi.png',
    initials: 'DGI',
  },
  {
    id: 'sonabhy',
    name: 'SONABHY',
    tag: 'Énergie',
    description: "Société Nationale Burkinabè des Hydrocarbures — acteur stratégique dans les appels d'offres du secteur énergétique.",
    logo: '/logos/sonabhy.png',
    initials: 'SNH',
  },
  {
    id: 'bumigeb',
    name: 'BUMIGEB',
    tag: 'Mines & Géologie',
    description: "Bureau des Mines et de la Géologie du Burkina — partenaire pour les dossiers d'appels d'offres dans le secteur minier.",
    logo: '/logos/bumigeb.png',
    initials: 'BMG',
  },
  {
    id: 'onea',
    name: 'ONEA',
    tag: 'Eau & Assainissement',
    description: "Office National de l'Eau et de l'Assainissement — collaborateur privilégié sur les marchés publics d'infrastructure.",
    logo: '/logos/onea.png',
    initials: 'ONEA',
  },
  {
    id: 'cci-bf',
    name: 'CCI-BF',
    tag: 'Commerce',
    description: "Chambre de Commerce et d'Industrie du Burkina Faso — réseau de soutien à l'entrepreneuriat et aux échanges commerciaux.",
    logo: '/logos/cci-bf.png',
    initials: 'CCI',
  },
];

export default function Partners() {
  return (
    <section
      style={{
        padding: '80px 0',
        background: 'var(--white)',
        borderTop: '1px solid var(--gold-border)',
        borderBottom: '1px solid var(--gold-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 52px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '14px',
            }}
          >
            <span style={{ width: '32px', height: '1px', background: 'var(--gold-border)', display: 'block' }} />
            Nos partenaires
            <span style={{ width: '32px', height: '1px', background: 'var(--gold-border)', display: 'block' }} />
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 700,
              color: 'var(--navy)',
              lineHeight: 1.12,
              marginBottom: '12px',
            }}
          >
            Ils nous font confiance
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75, fontWeight: 300 }}>
            Des institutions et entreprises de référence qui s'appuient sur notre expertise
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                background: 'var(--white)',
                border: '1px solid rgba(201,168,76,0.18)',
                borderRadius: '16px',
                padding: '20px 24px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.borderColor = 'var(--gold)';
                el.style.boxShadow = 'var(--shadow-gold)';
                const bar = el.querySelector('.left-bar') as HTMLElement;
                if (bar) bar.style.transform = 'scaleY(1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(201,168,76,0.18)';
                el.style.boxShadow = 'var(--shadow-sm)';
                const bar = el.querySelector('.left-bar') as HTMLElement;
                if (bar) bar.style.transform = 'scaleY(0)';
              }}
            >
              {/* Left animated bar */}
              <div
                className="left-bar"
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  background: 'linear-gradient(180deg, var(--gold), rgba(201,168,76,0.3))',
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.3s ease',
                  borderRadius: '0 0 0 16px',
                }}
              />

              {/* Logo */}
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '12px',
                  background: 'var(--gold-light)',
                  border: '1px solid var(--gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* 
                  Remplacez ce bloc par :
                  <Image src={partner.logo} alt={partner.name} width={72} height={72} style={{ objectFit: 'contain', padding: '8px' }} />
                  dès que vos logos sont disponibles dans /public/logos/
                */}
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    letterSpacing: '0.04em',
                    opacity: 0.85,
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  {partner.initials}
                </span>
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    background: 'var(--gold-light)',
                    color: 'var(--gold)',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    border: '1px solid var(--gold-border)',
                    marginBottom: '7px',
                    fontWeight: 500,
                  }}
                >
                  {partner.tag}
                </span>
                <div
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--navy)',
                    marginBottom: '6px',
                    lineHeight: 1.2,
                  }}
                >
                  {partner.name}
                </div>
                <p
                  style={{
                    fontSize: '12.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {partner.description}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="partner-arrow"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: '1px solid var(--gold-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  opacity: 0,
                  transform: 'translateX(-6px)',
                  transition: 'all 0.25s',
                }}
              >
                <ExternalLink size={12} color="var(--gold)" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>

        {/* Integration note */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '36px',
            fontSize: '12px',
            color: 'var(--text-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: '40px', height: '1px', background: 'var(--gold-border)', display: 'block' }} />
          Placez vos logos dans{' '}
          <code
            style={{
              background: 'var(--gold-light)',
              color: 'var(--gold)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '11px',
            }}
          >
            /public/logos/
          </code>{' '}
          puis remplacez les initiales par{' '}
          <code
            style={{
              background: 'var(--gold-light)',
              color: 'var(--gold)',
              padding: '1px 6px',
              borderRadius: '4px',
              fontSize: '11px',
            }}
          >
            &lt;Image /&gt;
          </code>
          <span style={{ width: '40px', height: '1px', background: 'var(--gold-border)', display: 'block' }} />
        </p>
      </div>
    </section>
  );
}
