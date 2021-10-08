import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationServices = ({ rootUrl }) => {

    return (
        <div className="service-nav border-bottom d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap">
            <NavLink exact to={`${rootUrl}/service-1`} className="service-nav-item border-end" activeClassName="nav-active">
                CONSEIL EN INVESTISSEMENT
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-2`} className="service-nav-item border-end" activeClassName="nav-active">
                ASSISTANCE A L'INVESTISSEMENT ET L'IMPLANTATION
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-3`} className="service-nav-item border-end" activeClassName="nav-active">
                RECHERCHE DE FINANCEMENTS
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-4`} className="service-nav-item border-end" activeClassName="nav-active">
                INGENIERIE PATRIMONIALE
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-5`} className="service-nav-item border-end" activeClassName="nav-active">
                MISE EN RELATION
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-6`} className="service-nav-item border-end" activeClassName="nav-active">
                STRATEGIE ENTREPRISE
            </NavLink>

            <NavLink exact to={`${rootUrl}/service-7`} className="service-nav-item" activeClassName="nav-active">
                GESTION ET SUIVI DE PROJET
            </NavLink>
        </div>
    );
};

export default NavigationServices;