
import { Link } from 'react-router-dom';

const Button = ({ title, borderColor, color, url }) => {

    const css = {
        padding: 8,
        border: "solid",
        borderWidth: 0.1,
        borderColor: borderColor,
        borderRadius: 30,
        marginRight: 10,
        minWidth: 100,
        color: "white",
        backgroundColor: color,
        cursor: 'pointer',
        width: 'max-content'
    };

    return (
        <Link to={url} className="btn" style={css}>{title}</Link>
    )
}

export default Button;