import './Main.scss'
import MainArticles from './MainArticles'
import MainHeader from './MainHeader.js'
import MainImages from './MainImages.js'

const Main = () => {
    return (
        <main>
            <MainHeader />
            <MainImages />
            <MainArticles />
        </main>
    )
}

export default Main