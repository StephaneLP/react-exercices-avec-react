import './Home.css'

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Page 1</li>
                        <li>Page 2</li>
                        <li>Page 3</li>
                    </ul>
                </nav>
            </header>
            <main className="d-flex align-items-center">
                <section className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                        <div className="col-12 col-md-4 col-lg-4"><div className="col-12 article"></div></div>
                    </div>
                </section>
            </main>
            <footer>
            </footer>
        </>
    )
}
export default Home