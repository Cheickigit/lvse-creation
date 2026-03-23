const PHONE = '22677046223';

export type ServiceKey =
  | 'creation-societe'
  | 'exoneration-fiscale'
  | 'montage-dossier'
  | 'analyse-dao'
  | 'devis'
  | 'contact'
  | 'general';

const SERVICE_LABELS: Record<ServiceKey, string> = {
  'creation-societe':    "Création de société et entreprise",
  'exoneration-fiscale': "Obtention d'exonération fiscale",
  'montage-dossier':     "Montage de dossier d'appel d'offres",
  'analyse-dao':         "Analyse du DAO",
  'devis':               "Demande de devis",
  'contact':             "Prise de contact",
  'general':             "Informations générales",
};

export function getWhatsAppLink(
  service: ServiceKey = 'general',
  pageUrl?: string
): string {
  const label = SERVICE_LABELS[service];
  const url =
    pageUrl ??
    (typeof window !== 'undefined'
      ? window.location.href
      : 'https://lvse-creation.bf');

  const message =
    `Bonjour LVSE CRÉATION,\n\n` +
    `Je vous contacte depuis votre site web.\n` +
    `📌 Service souhaité : ${label}\n` +
    `🔗 Page consultée : ${url}\n\n` +
    `Je souhaite obtenir plus d'informations. Merci !`;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(
  service: ServiceKey = 'general',
  pageUrl?: string
) {
  if (typeof window !== 'undefined') {
    window.open(getWhatsAppLink(service, pageUrl), '_blank', 'noopener,noreferrer');
  }
}