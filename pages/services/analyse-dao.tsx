import Head from 'next/head';
import { BarChart } from 'lucide-react';
import ServicePage from '@/components/ServicePage';

export default function AnalyseDAO() {
  return (
    <>
      <Head>
        <title>Analyse du DAO | LVSE CRÉATION</title>
        <meta name="description" content="Étude approfondie des Dossiers d'Appel d'Offres pour maximiser vos opportunités stratégiques au Burkina Faso." />
      </Head>
      <ServicePage
        serviceKey="analyse-dao"
        icon={BarChart}
        tag="Stratégie & Analyse"
        title="Analyse du DAO"
        subtitle="Étude approfondie des Dossiers d'Appel d'Offres pour identifier les opportunités stratégiques et maximiser vos chances."
        intro=""
        accompagnementText="Nous décortiquons chaque Dossier d'Appel d'Offres pour en extraire les contraintes, les risques et les leviers de différenciation. Notre analyse stratégique vous permet d'aborder chaque soumission avec une vision claire et un positionnement optimisé face à la concurrence."
        features={[
          'Lecture critique du cahier des charges',
          'Analyse des critères de sélection',
          'Évaluation des risques techniques',
          'Benchmarking concurrentiel',
          'Recommandations stratégiques',
          'Identification des leviers différenciants',
          'Évaluation du budget prévisionnel',
          'Rapport d\'analyse détaillé',
        ]}
        steps={[
          { title: 'Réception du DAO', desc: "Prise en charge du dossier et lecture complète de l'ensemble des documents fournis." },
          { title: 'Analyse technique et financière', desc: "Décryptage des exigences techniques, identification des contraintes et évaluation de la faisabilité." },
          { title: 'Étude de la concurrence', desc: "Analyse du contexte concurrentiel et identification des avantages compétitifs à valoriser." },
          { title: 'Remise du rapport', desc: "Livraison d'un rapport stratégique complet avec recommandations claires pour orienter votre soumission." },
        ]}
        metaTitle="Analyse du DAO | LVSE CRÉATION"
        metaDesc="Analyse stratégique des Dossiers d'Appel d'Offres au Burkina Faso."
      />
    </>
  );
}