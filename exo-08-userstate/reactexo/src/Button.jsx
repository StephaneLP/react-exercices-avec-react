const Button = (props) => {
    return (
        <button onClick={props.changeColor}>Changer la couleur (nb clicks : {props.count})</button>
    )
}

export default Button