import './MainArticles.scss'
import Profil from './Profil.js'

const articlesFromFakeApi = [
    {
        title: "First Article",
        content: "First Article Content",
    },
    {
        title: "Second Article",
        content: "Second Article Content",
    },
    {
        title: "Third Article",
        content: "Third Article Content",
    },
];

const MainArticles = () => {
    return (
        <section className="main-articles">
            {articlesFromFakeApi.map((el) => {
                return (
                    <article>
                        <h2>{el.title}</h2>
                        <p>{el.content}</p>
                    </article>
                )
            })}
            <Profil />
        </section>
    )
}

export default MainArticles