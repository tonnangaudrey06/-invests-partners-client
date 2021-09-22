const ButtonRadius = ({title, borderColor, color}) => {
    
    return (
        <div
            style={{
                padding: 8,
                border: "solid",
                borderWidth: 0.1,
                borderColor: borderColor,
                borderRadius: 30,
                marginRight: 10,
                marginLeft: 10,
                color: "white",
                backgroundColor: color,
                cursor: 'pointer',
                width: 'max-content'
            }}
        >{title}</div>
    )
}

export default ButtonRadius;