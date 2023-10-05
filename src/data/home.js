import expert1 from '../assets/img/expert-1.jpg';
import expert2 from '../assets/img/expert-2.jpg';
import expert3 from '../assets/img/expert-3.jpg';

import service1 from '../assets/img/icons/assets.png';
import service2 from '../assets/img/icons/Business.png';
import service3 from '../assets/img/icons/design-thinking.png';
import service4 from '../assets/img/icons/messenger.png';
import service5 from '../assets/img/icons/money.png';
import service6 from '../assets/img/icons/network.png';
import service7 from '../assets/img/icons/rocket.png';

const servicesData = [
  {
    title: 'service._1.title',
    content: "service._1.text",
    icon: service5
  },
  {
    title: 'service._2.title',
    content: "service._2.text",
    icon: service1,
  },
  {
    title: 'service._3.title',
    content: "service._3.text",
    icon: service3
  },
  {
    title: 'service._4.title',
    content: "service._2.text",
    icon: service2
  },
  {
    title: 'service._5.title',
    content: "service._5.text",
    icon: service6
  },
  {
    title: 'service._6.title',
    content: "service._6.text",
    icon: service7
  },
  {
    title: 'service._7.title',
    content: "service._7.text",
    icon: service4
  },
]

const expertsDataOld = [
  {
    image: expert1,
    name: "Evrard DIKONGO",
    tel: null,
    email: null,
    role: "Auditeur / Analyste Financier",
    role_en: "Auditor / Financial Analyst",
    bio: "Titulaire d'une licence professionnelle en finances et comptabilité et d'un  Master Professionnel  Finance et Comptabilité - option audit et contrôle financier. Il s’est particulièrement investi dans la mise en place des systèmes d'informations comptables et de reportings financiers,  contrôle et audit au sein d’entreprises privées puis  s'est spécialisé dans le montage de dossiers de financement et la gestion de projets. Il a activement participé au lancement de 5 start-ups  et a à son actif plus de 12 grands dossiers de financement à hauteur d'un milliard au moins chacun. Possédant d’excellentes compétences en matière d’audit (interne, comptable et financier), d’analyse financière, d’ingénierie financière, comptable et fiscale, et en management de la performance par les processus, il effectue depuis 7 ans des missions dans différents secteurs (industrie, numérique, prestations de services, hébergement, commerce général). Dans la même lancée, il met désormais ses compétences au service du Cabinet IP INVESTMENT S.A.",
    bio_en: "Holder of a professional bachelor's degree in finance and accounting and a professional master's degree in finance and accounting - audit and financial control option. He was particularly involved in the establishment of accounting information and financial reporting systems, control and audit within private companies and then specialized in the preparation of financing files and project management. He has actively participated in the launch of 5 start-ups and has to his credit more than 12 major financing projects to the tune of at least one billion each. With excellent skills in auditing (internal, accounting and financial), financial analysis, financial, accounting and tax engineering, and performance management through processes, he has carried out missions in different sectors (industry, digital, services, accommodation, general commerce). In the same vein, he now puts his skills at the service of the Cabinet IP INVESTMENT S.A."
  },
  {
    image: expert3,
    name: "Serge FOTSING",
    tel: null,
    email: null,
    role: "Conseiller Financier",
    role_en: "Financial Advisor",
    bio: "Après un diplôme d’Etudes Générales de Commerce et  un diplôme d’Etudes Supérieures de Commerce en  Audit et Contrôle de Gestion (Ecole de Commerce – ESSEC), il a depuis lors exercé dans les domaines de l’audit financier, la gestion, le contrôle et la comptabilité au sein de plusieurs entreprises privées. Durant tout ce parcours il a peaufiné ses compétences en définition des procédures comptables,  gestion comptable, gestion de la trésorerie, contrôle et analyse des comptes, mise en place des politiques d’élaboration budgétaire, contrôle financier, entre autres. A date, Serge FOTSING prête ces compétences diverses au service du Cabinet IP INVESTMENT S.A.",
    bio_en: "After a General Business Studies diploma and a Higher Business Studies diploma in Audit and Management Control (Business School - ESSEC), he has since worked in the areas of financial auditing, management, control and accounting in several private companies. Throughout this career he refined his skills in defining accounting procedures, accounting management, cash management, control and analysis of accounts, implementation of budget development policies, financial control, among others. To date, Serge FOTSING lends these various skills to the service of the Cabinet IP INVESTMENT S.A."
  },
  {
    image: expert2,
    name: "Alain-Guy BAYI",
    tel: null,
    email: null,
    role: "Conseiller en investissement",
    role_en: "Investment advisor",
    bio: "Il exerce dans les domaines de banque et assurance. Après une licence professionnelle en banque monnaie finance (Institut Supérieur des Techniques Appliquées et de Gestion - ISTAG), puis une Maitrise en banque monnaie finance (Université de Yaoundé II SOA) Il a travaillé dans le secteur privé. Rompu aux activités de banque et d’assurance il a passé plus de 10 ans auprès d’entrepreneurs et particuliers en qualité de conseiller. Au-delà du conseil en organisation, en stratégie patrimoniale et en planification de projet, son expérience dans le financement, l’analyse et le montage de dossier de crédit, a principalement servi aux clients qui constituent son portefeuille. A date, il s’est mis au service des entrepreneurs au travers du Cabinet IP INVESTMENT S.A.",
    bio_en: "He practices in the fields of banking and insurance. After a professional license in bank money finance (Higher Institute of Applied Techniques and Management - ISTAG), then a Masters in bank money finance (University of Yaoundé II SOA) He worked in the private sector. Well-versed in banking and insurance activities, he spent more than 10 years working with entrepreneurs and individuals as an advisor. Beyond consulting in organization, wealth strategy and project planning, his experience in financing, analyzing and setting up credit files has mainly served the clients who make up his portfolio. To date, he has been at the service of entrepreneurs through the Cabinet IP INVESTMENT S.A."
  }
]

const expertsData = [
  {
    image: expert3,
    name: "Serge FOTSING",
    tel: null,
    email: null,
    role: "Conseiller Financier",
    role_en: "Financial Advisor",
    bio: "Après un diplôme d’Etudes Générales de Commerce et  un diplôme d’Etudes Supérieures de Commerce en  Audit et Contrôle de Gestion (Ecole de Commerce – ESSEC), il a depuis lors exercé dans les domaines de l’audit financier, la gestion, le contrôle et la comptabilité au sein de plusieurs entreprises privées. Durant tout ce parcours il a peaufiné ses compétences en définition des procédures comptables,  gestion comptable, gestion de la trésorerie, contrôle et analyse des comptes, mise en place des politiques d’élaboration budgétaire, contrôle financier, entre autres. A date, Serge FOTSING prête ces compétences diverses au service du Cabinet IP INVESTMENT S.A.",
    bio_en: "After a General Business Studies diploma and a Higher Business Studies diploma in Audit and Management Control (Business School - ESSEC), he has since worked in the areas of financial auditing, management, control and accounting in several private companies. Throughout this career he refined his skills in defining accounting procedures, accounting management, cash management, control and analysis of accounts, implementation of budget development policies, financial control, among others. To date, Serge FOTSING lends these various skills to the service of the Cabinet IP INVESTMENT S.A."
  },
  {
    image: expert2,
    name: "Alain-Guy BAYI",
    tel: null,
    email: null,
    role: "Conseiller en investissement",
    role_en: "Investment advisor",
    bio: "Il exerce dans les domaines de banque et assurance. Après une licence professionnelle en banque monnaie finance (Institut Supérieur des Techniques Appliquées et de Gestion - ISTAG), puis une Maitrise en banque monnaie finance (Université de Yaoundé II SOA) Il a travaillé dans le secteur privé. Rompu aux activités de banque et d’assurance il a passé plus de 10 ans auprès d’entrepreneurs et particuliers en qualité de conseiller. Au-delà du conseil en organisation, en stratégie patrimoniale et en planification de projet, son expérience dans le financement, l’analyse et le montage de dossier de crédit, a principalement servi aux clients qui constituent son portefeuille. A date, il s’est mis au service des entrepreneurs au travers du Cabinet IP INVESTMENT S.A.",
    bio_en: "He practices in the fields of banking and insurance. After a professional license in bank money finance (Higher Institute of Applied Techniques and Management - ISTAG), then a Masters in bank money finance (University of Yaoundé II SOA) He worked in the private sector. Well-versed in banking and insurance activities, he spent more than 10 years working with entrepreneurs and individuals as an advisor. Beyond consulting in organization, wealth strategy and project planning, his experience in financing, analyzing and setting up credit files has mainly served the clients who make up his portfolio. To date, he has been at the service of entrepreneurs through the Cabinet IP INVESTMENT S.A."
  }
]

const HomeData = { servicesData, expertsData, expertsDataOld }

export default HomeData;