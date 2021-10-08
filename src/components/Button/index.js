const Button = ({ title, borderColor, color }) => {

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
        <button style={css}>{title}</button>
    )
}

export default Button;