import { CheckCircle } from 'lucide-react';

const packs = [
  {
    name: 'Pack Essentiel',
    price: '129.900 FCFA',
    features: ['RCCM', 'IFU', 'CNSS', 'STATUTS + PV', 'NUMERO COMMERCIAL'],
    button: 'ASSUMEZ',
  },
  {
    name: 'Pack Business',
    price: '189.900 FCFA',
    features: ['PACK ESSENTIEL', 'CONTRAT DE BAIL', 'BOITE POSTALE', 'MODELES DE CONTRATS', 'EXONERATION FISCALE'],
    button: 'VOS',
  },
  {
    name: 'Pack Excellence',
    price: '289.900 FCFA',
    features: ['PACK BUSINESS', 'AUDIT JURIDIQUE 03 MOIS', 'RELATION BANCAIRE', 'BRANDING VISUELLE', 'ETUDE DE MARCHE'],
    button: 'AMBITIONS !',
  },
];

export default function Pricing() {
  return (
    <section style={{ background: '#151515', padding: '80px 20px', color: '#ffffff', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            {/* Logo simplifié selon l'image */}
            <div style={{ display: 'flex', gap: '3px' }}>
              <div style={{ width: '12px', height: '12px', background: '#fcf1b3', borderRadius: '50% 50% 0 50%' }} />
              <div style={{ width: '12px', height: '12px', background: '#fcf1b3', borderRadius: '50% 50% 50% 0' }} />
            </div>
            <span style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>LVSE CREATION</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 500, marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Package Creation
          </h1>
          <p style={{ fontSize: '16px', color: '#a0a0a0', lineHeight: 1.5, maxWidth: '650px', fontWeight: 300 }}>
            Le meilleur pack n'est pas un luxe. C'est la garantie d'une entreprise structurée, crédible et prête à évoluer sans blocage.
          </p>
        </div>

        {/* Grille des prix */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {packs.map((pack, i) => (
            <div key={i} style={{ background: '#ffffff', borderRadius: '16px', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ color: '#151515', fontSize: '20px', fontWeight: 600, marginBottom: '30px' }}>
                  {pack.name}
                </h3>
                <div style={{ color: '#151515', fontSize: '28px', fontWeight: 700, marginBottom: '30px', letterSpacing: '-0.03em' }}>
                  {pack.price}
                </div>
                
                <div style={{ height: '1px', background: '#e5e5e5', marginBottom: '24px' }} />
                
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {pack.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#444', fontSize: '13px', fontWeight: 500 }}>
                      <CheckCircle size={16} color="#b964e1" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button style={{ width: '100%', background: '#1f1f1f', color: '#fff', padding: '12px', borderRadius: '30px', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer', letterSpacing: '0.05em' }}>
                {pack.button}
              </button>
            </div>
          ))}
        </div>

        {/* Bannière jaune */}
        <div style={{ background: '#fcf1b3', borderRadius: '30px 30px 0 0', padding: '40px 20px', textAlign: 'center', color: '#151515' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: 1.4 }}>
            Investir dans un Pack, c'est investir dans la sécurité et la crédibilité de votre société
          </h3>
          <a href="mailto:contact@livrease.com" style={{ display: 'inline-block', background: '#1f1f1f', color: '#fff', padding: '12px 40px', borderRadius: '30px', fontSize: '15px', textDecoration: 'none', fontWeight: 400 }}>
            contact@livrease.com
          </a>
        </div>

        {/* Pied de page de la section */}
        <div style={{ background: '#151515', borderTop: '1px solid #333', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', color: '#a0a0a0', fontSize: '14px' }}>
          <span>Appel : +226 65260762</span>
          <span>Whatsapp: +226 52455995</span>
        </div>

      </div>

      {/* RESPONSIVE POUR MOBILE */}
      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
