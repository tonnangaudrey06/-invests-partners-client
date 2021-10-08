import * as React from "react";
import MenuItem from "./MenuItem";
import logo from '../../../assets/img/logoWhite.png';

const Sidebar = (props) => {
    const [inactive, setInanctive] = React.useState(false);

    const handleChangeActive = (event) => {
        setInanctive(!inactive)
        props.onChangeActive(inactive);
    };

    const menuItems = [
        { name: "Mes projets", exact: true, to: `${props?.rootUrl}/projets`, iconClassName: "bi bi-house" },
        { name: "Messages", exact: true, to: `${props?.rootUrl}/messages`, iconClassName: "bi bi-envelope" },
        { name: "Profil", exact: true, to: `${props?.rootUrl}/profil`, iconClassName: "bi bi-person-bounding-box" },
    ];

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <a href="/" className="menu-item" >
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="toggle-menu-btn" onClick={handleChangeActive}>
                    {inactive ? <i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className="main-menu">
                <ul>
                    <li>
                        <a href="/" className="menu-item" >
                            <span className="markActive"></span>
                            <div className="menu-icone">
                                <i className="bi bi-globe2"></i>
                            </div>
                            <span className="name">Accueil</span>
                        </a>
                    </li>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem key={index} name={menuItem.name} exact={menuItem.exact} to={menuItem.to} iconClassName={menuItem.iconClassName} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;