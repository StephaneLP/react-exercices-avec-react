const Profil = (props) => {
    return (
        <main>
            <p>Nom : {props.user.surname}</p>
            <p>Prénom : {props.user.name}</p>
            <p>Age : {props.user.age}</p>
            <p>Ville : {props.user.city}</p>
        </main>
    )
}

export default Profil