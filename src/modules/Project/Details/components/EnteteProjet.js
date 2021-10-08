import React, { useState } from "react";
import logoProject from "../../../../assets/allgreenico1.png";

import { AiFillLike } from 'react-icons/ai';

const EnteteProjet = () => {

    const [Titre] = useState("Titre du projet");
    const [Description] = useState("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");
    const [investi] = useState("500M XAF déjà investi");
    const [contrib] = useState("20 Contributions");
    const [nbLike] = useState("20");

    return (
        <div className="entete">
            <div className="upper-container">
                <div className="image-container">
                    <img src={logoProject} alt="Logo" height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container" >
                <div className="titre"> <h3>{Titre}</h3></div>
                <div className="desc"> <h4>{Description}</h4></div>
                <div className="info">
                    <span className="donnee"> <h5>{investi}</h5></span>
                    <span className="donnee"> <h5>{contrib}</h5></span>
                    <span className="donnee"> <h5><AiFillLike className="me-1" /> {nbLike}</h5></span>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default EnteteProjet;