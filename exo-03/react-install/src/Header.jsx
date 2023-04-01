import Profil from "./Profil"

const Header = () => {
    const user = {
        firstName: "John",
        lastName: "Doe",
        age: 43,
        address: "1 rue de la paix, 22969 La Pie sur Garonne",
    }

    return (
        <header>
            <h1>Fiche utilisateur :</h1>
            <p>Nom : {user.firstName} {user.lastName}</p>
            <Profil user={user}/>
        </header>
    )
}

export default Header