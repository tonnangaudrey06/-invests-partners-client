import expert1 from '../assets/img/expert1.png';
import expert2 from '../assets/img/expert2.png';
import expert3 from '../assets/img/expert3.png';
import expert4 from '../assets/img/expert4.png';

import service1 from '../assets/img/icons/assets.png';
import service2 from '../assets/img/icons/Business.png';
import service3 from '../assets/img/icons/design-thinking.png';
import service4 from '../assets/img/icons/messenger.png';
import service5 from '../assets/img/icons/money.png';
import service6 from '../assets/img/icons/network.png';
import service7 from '../assets/img/icons/rocket.png';

import proj1 from '../assets/img/proj1.png';
import proj2 from '../assets/img/proj2.png';
import proj3 from '../assets/img/proj3.png';
import proj4 from '../assets/img/proj1.png';
import proj5 from '../assets/img/proj2.png';
import proj6 from '../assets/img/proj3.png';

import act1 from '../assets/img/ripening.png'
import act2 from '../assets/img/wool.png'
import act3 from '../assets/img/pexels-timur.png'
import act4 from '../assets/img/pexels.png'
import act5 from '../assets/img/automation.png'
import act6 from '../assets/img/wood.png'

import town1 from '../assets/img/Douala.png'
import town2 from '../assets/img/mosque.png'
import town3 from '../assets/img/open-uri.png'
import profile from '../assets/img/profil.jpg'

import image3 from '../assets/img/imag27.png';

const servicesData = [
  {
    title: "Assistance A L'Investissement Et L’Implantation",
    content: "Le Cameroun est un pays qui regorge d’énormes opportunités d’investissement. Afin de permettre aux différents investisseurs de mieux capitaliser sur cet atout, I&P accompagne l’investisseur dans l’une ou plusieurs phases de son parcours d’implantation",
    icon: service1,
  },
  {
    title: "Strategie d'investissement",
    content: "Ce service s’adresse principalement aux dirigeants d’entreprise dans la meure ou I&P les accompagne dans l’élaboration de leur business model, avec l’objectif de capitaliser sur les avantages de l’entreprise pour dégager des axes de croissance et de compétitivité.",
    icon: service3
  },
  {
    title: "Ingenierie Patrimoniale",
    content: "I&P offre ce service aux particuliers et aux entreprises pour leur faciliter la prise de décisions éclairées, en ce qui concerne tous les choix importants liés à un projet d’investissement ou à un projet de vie.",
    icon: service2
  },
  {
    title: "Recherche De Financements",
    content: "L’approche de I&P consiste à accompagner les porteurs de projets dans la structuration et la valorisation du projet, l’élaboration d’un plan d'action clair avec tous les contenus que cela implique ...",
    icon: service5
  },
  {
    title: "Mise En Relation",
    content: "Par le biais de sa plateforme, I&P offre une véritable zone de flux entre l’offre des porteurs de projets et la demande des investisseurs potentiels",
    icon: service6
  },
  {
    title: "Gestion Et Suivi De Projet",
    content: "Notre mission consiste à permettre aux porteurs de projets, organisations de la société civile, institutions publiques et privées de pouvoir recourir à tout moment à notre expertise.",
    icon: service7
  },
  {
    title: "Conseil en Investissement",
    content: "Vous souhaitez  placer des capitaux dans un projet financier, immobilier ou d’entreprise? I&P est le conseiller qu’il vous faut.",
    icon: service4
  },
]

const messagesData = [
  {
    read: false,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "07-08-2021",
    hour: "12h00"
  },
  {
    read: false,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "07-08-2021",
    hour: "12h00"
  },
  {
    read: true,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "07-08-2021",
    hour: "12h00"
  },
  {
    read: true,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "07-08-2021",
    hour: "12h00"
  },
  {
    read: false,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "07-08-2021",
    hour: "12h00"
  },
  {
    read: true,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "01-08-2021",
    hour: "12h00"
  },
  {
    read: false,
    name: 'INVEST AND PARTNERS',
    object: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    profile: profile,
    content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
    date: "09-08-2021",
    hour: "14h00"
  }
]

const expertsData = [
  {
    image: expert1,
    name: "NOM PRENOM",
    tel: "+237 694 58 78 23",
    email: "name@gmail.com",
    role: "Lorem ipsum dolor sit amet, consetetur",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"
  },
  {
    image: expert2,
    name: "NOM PRENOM",
    tel: "+237 694 58 78 23",
    email: "name@gmail.com",
    role: "Lorem ipsum dolor sit amet, consetetur",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"
  },
  {
    image: expert3,
    name: "NOM PRENOM",
    tel: "+237 694 58 78 23",
    email: "name@gmail.com",
    role: "Lorem ipsum dolor sit amet, consetetur",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"
  },
  {
    image: expert4,
    name: "NOM PRENOM",
    tel: "+237 694 58 78 23",
    email: "name@gmail.com",
    role: "Lorem ipsum dolor sit amet, consetetur",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?"
  }
]

const projectsData = [
  {
    image: proj1,
    title: "TITRE DU PROJET",
    content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    cash: "500 000 000"
  },
  {
    image: proj2,
    title: "TITRE DU PROJET",
    content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    cash: "10 000 000"
  },
  {
    image: proj3,
    title: "TITRE DU PROJET",
    content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    cash: "500 000 000"
  },
  {
    image: proj3,
    title: "TITRE DU PROJET",
    content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
    cash: "500 000 000"
  },
];

const sectionAct = [
  {
    name: "Industrie de l'energie",
    image: act4,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Agro-industrie",
    image: act1,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Numerique",
    image: act5,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Forets-bois",
    image: act6,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Textiles confectio-cuir",
    image: act2,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Immobilier",
    image: act3,
    projects: [
      {
        country: "Cameroun",
        image: town1,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Senegal",
        image: town2,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
      {
        country: "Nigeria",
        image: town3,
        content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam ",
        towns: [
          {
            name: "Yaounde",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Douala",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Nkongsamba",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          },
          {
            name: "Buea",
            projects: [
              {
                image: proj4,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 100,
                contribution: 30,
              },
              {
                image: proj5,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "10",
                like: 250,
                contribution: 20,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 200,
                contribution: 25,
              },
              {
                image: proj6,
                title: "TITRE DU PROJET",
                content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
                cash: "500",
                like: 150,
                contribution: 10,

              },
            ]
          }
        ]
      },
    ]
  },
]

const eventsData = [
  {
    name: "Broomfield youth symphony fundraiser",
    debut: '13 Jan 2022',
    fin: '14 Jan 2022',
    location: 'AKWA, DOUALA, CAMEROUN',
    places: 200,
    remaining: 20,
    price: '10 000',
    free: false,
    bookmark: true,
    picture: image3
  },
  {
    name: "Broomfield youth symphony fundraiser",
    debut: '13 Jan 2022',
    fin: '14 Jan 2022',
    location: 'AKWA, DOUALA, CAMEROUN',
    places: 200,
    remaining: 100,
    price: '0',
    free: true,
    bookmark: false,
    picture: image3
  },
  {
    name: "Broomfield youth symphony fundraiser",
    debut: '13 Jan 2022',
    fin: '14 Jan 2022',
    location: 'AKWA, DOUALA, CAMEROUN',
    places: 30,
    remaining: 10,
    price: '10 000',
    free: false,
    bookmark: true,
    picture: image3
  }
]

const HomeData = { servicesData, expertsData, projectsData, sectionAct, messagesData, eventsData }

export default HomeData;