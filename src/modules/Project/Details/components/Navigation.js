import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <div>
                <NavLink exact to="/dsc" activeClassName="nav-active">
                    Description du projet
                </NavLink>
                <NavLink exact to="/news" activeClassName="nav-active">
                    Actualités
                </NavLink>
                <NavLink exact to="/questions" activeClassName="nav-active">
                    Question
                </NavLink>
            </div>
            <div className="lineInf"></div>
        </div>
    );
};

export default Navigation;