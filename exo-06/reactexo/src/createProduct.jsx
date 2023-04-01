const CreateProduct = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const title = event.target.title.value
        const price = event.target.price.value
        const description = event.target.description.value

        console.log(title, price, description)
    }
    return (
        <section>
            <h2>Formulaire :</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Titre du produit : </label>
                    <input name="title" type="text" />
                </div>
                <div>
                    <label htmlFor="">Prix du produit : </label>
                    <input name="price" type="number" />
                </div>
                <div>
                    <label htmlFor="">Description du produits : </label>
                    <input name="description" type="text" />
                </div>
                <br></br>
                <input type="submit" />
            </form>
        </section>
    )
}

export default CreateProduct