import { Link } from "react-router-dom";

const ButtonCustom = ({title, path, borderColor, color, fontColor, fontSize, margingRight}) => {
    
    return (
        <Link
            to={path}
            style={{
                paddingLeft:25,
                paddingRight:25,
                paddingTop: 6,
                paddingBottom:6,
                border: "solid",
                borderWidth: 0.1,
                borderColor: borderColor,
                borderRadius: 5,
                fontWeight:600,
                color: fontColor,
                fontSize: fontSize,
                marginRight:margingRight,
                backgroundColor: color,
                cursor: 'pointer',
                width: 'max-content',
                textDecoration: 'none'
            }}
        >{title}</Link>
    )
}

export default ButtonCustom;


