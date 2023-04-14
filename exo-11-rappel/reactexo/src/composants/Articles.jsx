const Articles = (props) => {
    return (
        <main>
            {props.articlesFromApi.map((el) => {
                return (
                    <article key={el.id}>
                        {el.isPublished && (
                            <>
                                <h2>{el.title}</h2>
                                <img src={el.image}></img>
                                <article>Article 1</article>
                                <p>{el.content}</p>
                            </>
                        )}
                    </article>
                )            
            })}
        </main>
    )
}

export default Articles