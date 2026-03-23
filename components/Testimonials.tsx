const testimonials = [
  {
    id: 1,
    text: "LVSE m'a accompagné de A à Z pour la création de ma SARL. En moins de 2 semaines, tout était immatriculé. Un professionnalisme remarquable !",
    name: 'Koné Oumarou',
    role: 'Directeur, KO Trading',
    initials: 'KO',
    featured: false,
    avatarBg: 'var(--gold-light)',
    avatarColor: 'var(--gold)',
  },
  {
    id: 2,
    text: "Grâce à LVSE, nous avons obtenu une exonération fiscale sur 5 ans. Leur maîtrise des procédures burkinabè est incomparable. Je recommande vivement !",
    name: 'Sawadogo Brigitte',
    role: 'Fondatrice, SB Consulting',
    initials: 'SB',
    featured: true,
    avatarBg: 'var(--navy)',
    avatarColor: 'var(--gold)',
  },
  {
    id: 3,
    text: "Notre dossier d'appel d'offres a été retenu grâce au travail rigoureux de l'équipe LVSE. Un partenaire stratégique indispensable pour nos marchés.",
    name: 'Diabré Théodore',
    role: 'CEO, BTP Sahel',
    initials: 'DT',
    featured: false,
    avatarBg: 'var(--gold-mid)',
    avatarColor: 'var(--navy)',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--gold)">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '90px 0',
        background: 'var(--cream)',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold-border), transparent)',
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
            Témoignages
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
            Ce que disent<br />nos clients
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75, fontWeight: 300 }}>
            Des entrepreneurs satisfaits qui nous ont fait confiance pour concrétiser leurs projets
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                position: 'relative',
                borderRadius: '20px',
                padding: '28px 24px',
                background: t.featured ? 'var(--navy)' : 'var(--white)',
                border: t.featured ? '1px solid var(--gold)' : '1px solid rgba(201,168,76,0.18)',
                boxShadow: t.featured
                  ? '0 8px 40px rgba(10,26,47,0.18)'
                  : 'var(--shadow-sm)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                if (!t.featured) {
                  el.style.transform = 'translateY(-4px)';
                  el.style.borderColor = 'var(--gold)';
                  el.style.boxShadow = 'var(--shadow-gold)';
                } else {
                  el.style.transform = 'translateY(-4px)';
                }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                if (!t.featured) {
                  el.style.borderColor = 'rgba(201,168,76,0.18)';
                  el.style.boxShadow = 'var(--shadow-sm)';
                }
              }}
            >
              {/* Verified badge */}
              {t.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    right: '18px',
                    fontSize: '10px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    padding: '3px 9px',
                    borderRadius: '20px',
                    fontWeight: 600,
                  }}
                >
                  Vérifié
                </div>
              )}

              {/* Quote icon */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: t.featured ? 'rgba(201,168,76,0.15)' : 'var(--gold-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
              </div>

              <StarRating />

              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.75,
                  color: t.featured ? 'rgba(255,255,255,0.82)' : 'var(--text-muted)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  marginBottom: '22px',
                }}
              >
                "{t.text}"
              </p>

              <div
                style={{
                  height: '1px',
                  background: t.featured ? 'rgba(255,255,255,0.1)' : 'var(--gold-border)',
                  marginBottom: '18px',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: t.avatarBg,
                    color: t.avatarColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: t.featured ? 'var(--white)' : 'var(--navy)',
                      marginBottom: '2px',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: '11.5px',
                      color: t.featured ? 'rgba(255,255,255,0.4)' : 'var(--text-dim)',
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--gold-border), transparent)',
        }}
      />
    </section>
  );
}
