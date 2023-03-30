import './Footer.scss'

const Footer = (props) => {
    return (
        <footer>
            <section className="footer-infos">
                <img src={props.logo}></img>
                <span>Au cinéma, ça déborde de testosterone !...</span>
            </section>
        </footer>
    )
}

export default Footer