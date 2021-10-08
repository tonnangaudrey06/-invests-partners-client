const mois = [
    {
        abbreviation: "Jan",
        name: "Janvier"
    },
    {
        abbreviation: "Feb",
        name: "Février"
    },
    {
        abbreviation: "Mar",
        name: "Mars"
    },
    {
        abbreviation: "Apr",
        name: "Avril"
    },
    {
        abbreviation: "May",
        name: "Mai"
    },
    {
        abbreviation: "Jun",
        name: "Juin"
    },
    {
        abbreviation: "Jul",
        name: "Juillet"
    },
    {
        abbreviation: "Aug",
        name: "Août"
    },
    {
        abbreviation: "Sep",
        name: "Septembre"
    },
    {
        abbreviation: "Oct",
        name: "Octobre"
    },
    {
        abbreviation: "Nov",
        name: "Novembre"
    },
    {
        abbreviation: "Dec",
        name: "Decembre"
    }
];

const jours = () => {
    let jours = [];
    for (let i = 0; i < 31; i++) {
        jours[i] = i + 1;
    }
    return jours;
}

const annee = () => {
    let annee = [];
    annee[0] = 1990;
    for (let i = 1; i < 40; i++) {
        annee[i] = annee[i-1] + 1;
    }
    return annee;
}

export { mois, jours, annee };