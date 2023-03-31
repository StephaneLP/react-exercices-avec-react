const ArticlesListe = (props) => {
    const afficheDesc = (item,classe) => {
        const element = document.querySelector("."+classe)
        element.textContent = item.content
    }

    return (
        <div>
            {props.articles.map((item) => {
                const classe = "class" + item.id
                return (
                    <article key={item.id}>
                        <h2>{item.title}</h2>
                        <p className={classe}></p>
                        <button onClick={() => afficheDesc(item,classe)}>Cliquer ici</button>
                    </article>
                )
            })}
        </div>
    )
}

export default ArticlesListe