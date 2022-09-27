import React from "react";

import projetimg from "../../../../assets/img/projet.jpg";
import { LikeButton } from "../../../../components";

import { moneyFormat } from '../../../../core/utils/helpers';

const EnteteProjet = ({
    projet,
    user,
    t,
    errorMessage = (message) => { },
    setError = (value) => { }
}) => {

    const [likeCount, setLikeCount] = React.useState(0);

    return (
        <div className="project-details-entete mb-4">
            <div className="project-details-image">
                <img src={projet?.logo ? projet.logo : projetimg} alt="Logo projet" />
            </div>
            <div className="project-details-box">
                <div className="project-details-titre">{projet?.intitule}</div>

                <div className="project-details-info my-3"> {moneyFormat(projet?.iv_total)} {t('projet.details.invest')}</div>

                <div className="d-flex align-items-center flex-wrap gap-4">
                    <div className="project-details-info"> {moneyFormat(projet?.iv_count)}  {t('projet.details.investor')}</div>
                    <div className="project-details-info d-flex align-items-center gap-2">
                        <LikeButton
                            user={user}
                            projet={projet}
                            likeCount={(value) => setLikeCount(value)}
                            errorMessage={(value) => errorMessage(value)}
                            setError={(value) => setLikeCount(value)}
                        />
                        {`${likeCount} likes`}
                    </div>
                    {/* <span className="donnee"> <h5><AiFillLike className="me-1" /> {nbLike}</h5></span> */}
                </div>
            </div>
            {/* <div className="line"></div> */}
        </div>
    );
};

export default EnteteProjet;