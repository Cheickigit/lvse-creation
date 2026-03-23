import Head from 'next/head';
import { Shield } from 'lucide-react';
import ServicePage from '@/components/ServicePage';

export default function ExonerationFiscale() {
  return (
    <>
      <Head>
        <title>Exonération fiscale | LVSE CRÉATION</title>
        <meta name="description" content="Obtenez votre exonération fiscale au Burkina Faso grâce à notre expertise en optimisation et accompagnement administratif." />
      </Head>
      <ServicePage
        serviceKey="exoneration-fiscale"
        icon={Shield}
        tag="Fiscal & Optimisation"
        title="Obtention d'exonération fiscale"
        subtitle="Analyse approfondie de votre éligibilité aux dispositifs d'exonération fiscale en vigueur au Burkina Faso."
        intro=""
        accompagnementText="Nous analysons votre situation fiscale, identifions les dispositifs d'exonération auxquels vous êtes éligible, constituons votre dossier et le défendons auprès de la Direction Générale des Impôts. Notre équipe maîtrise parfaitement le cadre légal burkinabè pour maximiser vos avantages fiscaux."
        features={[
          'Audit fiscal complet de votre situation',
          'Identification des dispositifs applicables',
          'Constitution du dossier de demande',
          'Suivi auprès de la DGI',
          'Optimisation fiscale légale',
          'Protection des associés',
          'Accompagnement sur 5 ans',
          'Veille réglementaire continue',
        ]}
        steps={[
          { title: 'Audit de votre situation', desc: 'Analyse complète de votre structure, activité et situation fiscale actuelle.' },
          { title: 'Identification des dispositifs', desc: "Recherche des exonérations applicables selon votre secteur d'activité et votre statut." },
          { title: 'Constitution du dossier', desc: 'Préparation de toutes les pièces requises et rédaction de la demande officielle.' },
          { title: 'Dépôt et suivi DGI', desc: "Soumission du dossier et suivi actif auprès de la Direction Générale des Impôts jusqu'à l'obtention." },
        ]}
        metaTitle="Exonération fiscale | LVSE CRÉATION"
        metaDesc="Obtenez votre exonération fiscale au Burkina Faso avec LVSE CRÉATION."
      />
    </>
  );
}