import './style.css'

const Header = () => {
    return (
        <header>
            <div>
                <img className="header-logo" src="https://www.pngmart.com/files/1/Coffee-Logo-PNG-Image.png"></img>                
            </div>
            <nav>
                <ul>
                    <li><a href="">Accueil</a></li>
                    <li><a target="_blank" href="">Café 1</a></li>
                    <li><a target="_blank" href="">Café 2</a></li>
                    <li><a target="_blank" href="">Café 3</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header