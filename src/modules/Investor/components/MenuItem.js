import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MenuItem = (props) => {
    const { name, iconClassName, to, exact } = props
    const location = useLocation();
    
    return (
        <li onClick={props.onClick}className={location.pathname.includes(to) ? "menu-item active" : "menu-item"}>
            <NavLink exact={exact} to={to} className="d-flex align-items-center" >
                <span className="markActive"></span>
                <div className="menu-icone me-1">
                    <i className={iconClassName}></i>
                </div>
                <span className="name">{name}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;