import React from "react";

import projetimg from "../../../../assets/img/projet.jpg";

import { moneyFormat } from '../../../../core/utils/helpers';

const EnteteProjet = (props) => {

    const { projet, t } = props;

    return (
        <div className="entete">
            <div className="upper-container">
                <div className="image-container">
                    <img src={projet?.logo ? projet.logo : projetimg} alt="Logo" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container" >
                <div className="titre"> <h3>{projet?.intitule}</h3></div>
                {/* <div className="desc"> <h4>{description}</h4></div> */}
                <div className="info">
                    <span className="donnee"> <h5>{moneyFormat(projet?.iv_total)} {t('projet.details.invest')}</h5></span>
                    <span className="donnee"> <h5>{moneyFormat(projet?.iv_count)}  {t('projet.details.investor')}</h5></span>
                    {/* <span className="donnee"> <h5><AiFillLike className="me-1" /> {nbLike}</h5></span> */}
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default EnteteProjet;