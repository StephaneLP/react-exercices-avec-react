const ArticlesListe = (props) => {
    const deleteProduct = (item) => {
        return (
            console.log(item.id)
        )
    }
    return (
        <div>
            <h2>Liste de Produits</h2>
            {props.articles.map((item) => {
                return (
                    <article key={item.id}>
                        <h3>{item.title}</h3>
                        <button onClick={() => deleteProduct(item)}>Supprimer le produit</button>
                    </article>
                )
            })}
        </div>
    )
}

export default ArticlesListe