import './Main.scss'
import MainArticles from './MainArticles'
import MainHeader from './MainHeader.js'
import MainImages from './MainImages.js'

const Main = (props) => {
    return (
        <main>
            <MainHeader />
            <MainImages />
            <MainArticles articles={props.articles}/>
        </main>
    )
}

export default Main