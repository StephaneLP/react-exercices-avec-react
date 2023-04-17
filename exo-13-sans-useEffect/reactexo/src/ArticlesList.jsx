import { useState } from "react"

const ArticlesList = () => {
    // Déclaration de la variable articles :
    // - qui recevra le résultat de l'appel fetch du fichier articles.json
    // - placée dans le useState en raison de l'aspect asynchrone de l'appel fetch
    // - initialisée avec un tableau vide
    const [articles, setArticles] = useState([])
    console.log("Arret 1")
    // Si le contenu de la variable articles est un tableau vide (longueur = 0) :
    // - l'appel fetch est réalisé
    // - cette condition a pour objectif d'éviter de rentrer dans une boucle infinie
    //   (appel fetch executé à chaque execution de la méthode setArticles)
    if(articles.length === 0){
    fetch("./articles.json")
        .then ((dataJson) => {
            // La fonction fetch reçoit un tableau au format json, 
            // converti en tableau javascript à l'aide de la méthode .json()
            return dataJson.json()
        })
        .then ((dataJS) => {
            // La fonction setArticles permet :
            // - de placer le tableau javascript dans la variable articles (useState)
            // - de provoquer le rechargement du composant ArticlesList
            console.log("Arret Fetch")
            setArticles(dataJS)
        })
    }

    return (
        <section>
            {articles.map ((el) => {
                return (
                    <article key={el.id}>
                        <h2>Titre : {el.title}</h2>
                        <a href={el.url} target="_blank">Lien</a>
                        <img style={{width:100 + 'px'}} src={el.image}></img>
                        <p>Description : {el.description}</p>
                    </article>
                )
            })}

        </section>
    )
}

export default ArticlesList