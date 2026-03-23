// ─────────────────────────────────────────────
// pages/services/creation-societe.tsx
// ─────────────────────────────────────────────
import Head from 'next/head';
import { Building2 } from 'lucide-react';
import ServicePage from '@/components/ServicePage';

export default function CreationSociete() {
  return (
    <>
      <Head>
        <title>Création de société | LVSE CRÉATION</title>
        <meta name="description" content="Accompagnement complet pour la création de votre entreprise : choix du statut, rédaction des statuts, immatriculation au Burkina Faso." />
      </Head>
      <ServicePage
        serviceKey="creation-societe"
        icon={Building2}
        tag="Juridique & Administratif"
        title="Création de société et entreprise"
        subtitle="De l'idée à l'immatriculation, nous prenons en charge l'intégralité du processus de création d'entreprise."
        intro=""
        accompagnementText="Nous vous conseillons sur le choix du statut juridique le plus adapté à votre projet (SARL, SAS, EI, EURL, etc.), rédigeons des statuts sur-mesure et gérons l'ensemble des formalités administratives auprès des organismes compétents au Burkina Faso."
        features={[
          'Analyse de votre projet et conseil personnalisé',
          'Choix du statut juridique optimal',
          'Rédaction des statuts sur-mesure',
          'Dépôt du capital social',
          'Immatriculation au registre du commerce',
          "Obtention du numéro d'identification fiscale",
          "Publication d'annonce légale",
          'Suivi post-création',
        ]}
        steps={[
          { title: 'Consultation initiale gratuite', desc: 'Analyse de votre projet, définition des besoins et recommandation du statut juridique adapté.' },
          { title: 'Constitution du dossier', desc: "Rédaction des statuts, collecte des pièces justificatives, préparation de tous les documents requis." },
          { title: 'Dépôt et immatriculation', desc: 'Soumission du dossier au RCCM et auprès des organismes compétents.' },
          { title: 'Remise des documents officiels', desc: "Obtention du certificat d'immatriculation, du NIF et de tous les documents constitutifs." },
        ]}
        metaTitle="Création de société | LVSE CRÉATION"
        metaDesc="Accompagnement complet pour la création de votre entreprise au Burkina Faso."
      />
    </>
  );
}