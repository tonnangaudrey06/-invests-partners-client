import React from 'react';
import { Button } from '../../../../components';

const InformationsProjet = () => {
    return (
        <div className="infoProjet">
            <div className="contour">
                <div className="element" >
                    <span className="label"> Catégorie : </span>
                    <span className="valeur"> Agriculture </span>
                </div>
                <div className="element" >
                    <span className="label"> Localité : </span>
                    <span className="valeur"> Douala, Littoral, Cameroun </span>
                </div>
                <div className="element" >
                    <span className="label"> Montant minimum d'investissement  : </span>
                    <span className="valeur"> 100 000 FCFA </span>
                </div>
                <div className="element" >
                    <span className="label"> Taux de rentabilité : </span>
                    <span className="valeur"> 20% </span>
                </div>
                <div className="element" >
                    <span className="label"> CA prévisionnel : </span>
                    <span className="valeur"> 50 000 000 000 FCFA </span>
                </div>
                <div className="element" >
                    <span className="label"> Durée du projet : </span>
                    <span className="valeur"> 5 ans </span>
                </div>
                <div className="element" >
                    <span className="label"> Retour sur investissement : </span>
                    <span className="valeur"> 10 ans </span>
                </div>
                <div className="button">
                    <Button title="Je suis interessé" color="#c5473b" fontColor="white" fontSize="14px" />
                    <div className="fav"><span className="label">Ajouter au favoris</span> <i className="bi bi-heart"></i></div>
                </div>
            </div>

        </div>
    );
};

export default InformationsProjet;