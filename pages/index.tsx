import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LVSE CRÉATION | Création d'entreprise et exonération fiscale au Burkina Faso</title>
        <meta
          name="description"
          content="Accompagnement sur-mesure pour la création de votre entreprise, l'obtention d'exonérations fiscales et la réponse aux appels d'offres au Burkina Faso."
        />
        <meta
          name="keywords"
          content="création d'entreprise, exonération fiscale, appel d'offres, DAO, Burkina Faso, Ouagadougou, LVSE"
        />
        <meta property="og:title" content="LVSE CRÉATION | Expert en entrepreneuriat au Burkina Faso" />
        <meta property="og:description" content="Votre partenaire de confiance pour créer votre entreprise et optimiser vos démarches fiscales." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <Partners />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
