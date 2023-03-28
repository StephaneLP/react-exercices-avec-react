const ArticlesListe = (props) => {
    return (
        <div>
            {props.articles.map((item) => {
                return (
                    <article>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default ArticlesListe