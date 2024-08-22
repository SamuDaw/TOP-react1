function Button({ text="Click Me!", color = "blue", fontSize = 12, handleClick }){
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }
    return (
        <button onClick={() => handleClick('https://theodinproject.com')} style={buttonStyle}>
            {text}
        </button>
    );
}

//DEPRECATED
Button.defaultProps = {
    text: "Click Me!",
    color: "blue",
    fontSize: 12
}

export default Button;