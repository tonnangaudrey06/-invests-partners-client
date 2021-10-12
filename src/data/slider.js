import Image1 from '../assets/img/slideh.png';
import Image2 from '../assets/img/slideg.png';

const SliderData = [
    {
        title: 'Avec Invests & Partners, investissez autrement',
        subtitle: "Grâce au dynamisme et à l’expertise de nos spécialistes, notre connaissance parfaite de l’environnement économique, et notre réseau de partenaires, notamment en Cote d’Ivoire et au rwanda, nous ne ménageons aucun effort dans  l’optique de répondre à vos différents besoins  en termes d’investissement, d’accompagnement, de diagnostic, de suivi, de gestion et d’implémentation.",
        Path: '/',
        label: [
            {
                text: 'Découvrir les opportunités',
                color: 'white',
                backgroundColor: 'transparent'
            },
            {
                text: 'Parler à un conseillé',
                color: 'grey',
                backgroundColor: '#585b60'
            }
        ],
        image: Image1,
        alt: 'image 1'
    },
    {
        title: 'Investisseurs, developpez votre patrimoine',
        subtitle: 'Réelle alternative au placement boursier ou bancaire, l’investissement dans des entreprises non-cotées vous permet de participer activement au dynamisme économique de votre territoire. Découvrez une grande diversité de projets, tous validés par nos experts financiers.',
        Path: '/',
        label: [
            {
                text: 'Voir les projets',
                color: 'white',
                backgroundColor: 'transparent'
            },
        ],
        image: Image2,
        alt: 'image 2'
    },
];

export default SliderData;