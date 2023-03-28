import './MainArticles.scss'
import Profil from './Profil.js'

const MainArticles = (props) => {
    return (
        <section className="main-articles">
            {props.articles.map((item) => {
                return (
                    <article key={item.key}>
                        <h2>{item.title}</h2>
                        <img src={item.image}></img>
                    </article>
                )
            })}
            {/* <Profil /> */}
        </section>
    )
}

export default MainArticles