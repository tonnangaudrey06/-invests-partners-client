import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MenuItem = (props) => {
    const { name, iconClassName, to, exact } = props
    const location = useLocation();
    
    return (
        <li onClick={props.onClick} >
            <NavLink exact={exact} to={to} className={location.pathname.includes(to) ? "menu-item active" : "menu-item"}  >
                <span className="markActive"></span>
                <div className="menu-icone">
                    <i className={iconClassName}></i>
                </div>
                <span className="name">{name}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;