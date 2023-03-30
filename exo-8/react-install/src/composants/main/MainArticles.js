import './MainArticles.scss'

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
        </section>
    )
}

export default MainArticles