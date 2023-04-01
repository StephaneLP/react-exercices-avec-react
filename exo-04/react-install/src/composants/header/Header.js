import './Header.scss';

const isUserLoggedIn = true;

const Header = (props) => {
    return (
        <header>
            <div>
                <img className="header-logo" src={props.logo}></img>                
            </div>
            <nav>
                <ul>
                    <li><a href="">Accueil</a></li>
                    {props.menu.map((item) => {
                        return (
                            <li><a target="_blank" href={item.link}>{item.title}</a></li>
                        )
                    })}
                </ul>
            </nav>
            <p>{isUserLoggedIn ? "Bienvenue Stéphane" : <a href="#">Connexion</a>}</p>
        </header>
    )
}

export default Header