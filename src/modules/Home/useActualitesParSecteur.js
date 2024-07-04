import { useState, useEffect } from 'react';
import { AppService } from "../../core/services";

const useActualitesParSecteur = (props) => {
    const [actualites, setActualites] = useState(null)
    const { actualite, match } = props;
    const { params: { secteur_id } } = match;
    
    
    const loadSecteur = () =>{
        AppService.actualitesecteur(secteur_id).then(
          (rs) => {
            console.log(rs.data.data);
            setActualites(rs.data.data);
          }
        )
      }

    useEffect(() => {
        loadSecteur();
    }, [match, actualite])

};

export default useActualitesParSecteur;
