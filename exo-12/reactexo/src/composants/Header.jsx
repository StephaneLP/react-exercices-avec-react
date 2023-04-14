const Header = (props) => {
    return (
        <header>
            <div>
                <img className="header-logo" src="https://www.pngmart.com/files/1/Coffee-Logo-PNG-Image.png"></img>                
            </div>
            <div>
                {props.user.isLogged ? (
                    <span>Voir mon profil</span>
                ) : (
                    <span>Créer un compte</span>
                )}
            </div>
        </header>
    )
}

export default Header