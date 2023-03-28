import Header from './composants/Header.js'
import Main from './composants/Main.js'
import Footer from './composants/Footer.js'

const menuItems = [
    {
        title: "Jean-claude",
        link: "https://fr.wikipedia.org/wiki/Jean-Claude_Van_Damme",
        id: 1
    },
    {
        title: "Chuck",
        link: "https://fr.wikipedia.org/wiki/Chuck_Norris",
        id: 2
    },
    {
        title: "Stallone",
        link: "https://fr.wikipedia.org/wiki/Chuck_Norris",
        id: 3
    },
]

const articles = [
    {
        title: "JCVD",
        image:
        "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F7c27c579-10a2-464c-ab4d-4da173184c68.2Ejpeg/2216x1536/quality/80/jean-claude-van-damme.jpeg",
    },
    {
        title: "Chuck Norris",
        image:
        "https://film.org.pl/wp-content/uploads/2021/01/Chuck_Norris_1.jpg",
    },
    {
        title: "Sylverster Stallone",
        image:
        "https://media.gettyimages.com/photos/sylvester-stallone-in-a-scene-from-the-film-rambo-iii-1988-picture-id168583123?s=612x612",
    },
]

const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/RPC-JP_Logo.png/1200px-RPC-JP_Logo.png";

function App() {
    return (
        <div>
            <Header logo={logo} menu={menuItems} />
            <Main articles={articles}/>
            <Footer logo={logo} />
        </div>
    )
}

export default App;
