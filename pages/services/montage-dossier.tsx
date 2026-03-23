import Head from 'next/head';
import { FileText } from 'lucide-react';
import ServicePage from '@/components/ServicePage';

export default function MontageDossier() {
  return (
    <>
      <Head>
        <title>Montage dossier appel d\'offres | LVSE CRÉATION</title>
        <meta name="description" content="Préparation et constitution complète de vos dossiers de candidature pour les appels d'offres au Burkina Faso." />
      </Head>
      <ServicePage
        serviceKey="montage-dossier"
        icon={FileText}
        tag="Marchés Publics"
        title="Montage de dossier d'appel d'offres"
        subtitle="Préparation et constitution complète de vos dossiers de candidature pour remporter les marchés publics."
        intro=""
        accompagnementText="Notre équipe prend en charge la lecture complète de l'avis d'appel d'offres, l'analyse des exigences techniques et financières, et la constitution d'un dossier solide et conforme. Nous rédigeons l'ensemble des pièces requises pour maximiser vos chances de succès dans les marchés publics burkinabè."
        features={[
          "Analyse complète de l'avis d'appel d'offres",
          'Vérification des critères de recevabilité',
          'Constitution du dossier administratif',
          'Rédaction de la réponse technique',
          'Optimisation de l\'offre financière',
          'Relecture et contrôle qualité',
          'Dépôt dans les délais impartis',
          'Suivi post-soumission',
        ]}
        steps={[
          { title: "Réception et analyse de l'AO", desc: "Étude approfondie du cahier des charges, des critères et des exigences techniques et financières." },
          { title: 'Vérification de l\'éligibilité', desc: "Contrôle de votre conformité aux conditions de participation et identification des points de vigilance." },
          { title: 'Constitution du dossier', desc: "Collecte des pièces administratives, rédaction de l'offre technique et élaboration de l'offre financière." },
          { title: 'Dépôt et suivi', desc: "Remise du dossier complet dans les délais et accompagnement jusqu'à la décision d'attribution." },
        ]}
        metaTitle="Montage dossier appel d'offres | LVSE CRÉATION"
        metaDesc="Montage de dossiers d'appel d'offres pour les marchés publics au Burkina Faso."
      />
    </>
  );
}