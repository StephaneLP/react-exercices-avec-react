const Profil = (props) => {
    return (
        <>
            <p>Age : {props.user.age}</p>
            <p>Adresse : {props.user.address}</p>
        </>
    )
}

export default Profil
