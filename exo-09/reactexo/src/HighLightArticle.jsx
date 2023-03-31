const HighLightArticle = (props) => {
    return (
        <article>
            <h2>{props.articles.title}</h2>
            <p>{props.articles.content}</p>
        </article>
    )
}

export default HighLightArticle