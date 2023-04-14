
import Header from "./composants/Header"
import Footer from "./composants/Footer"
import Articles from "./composants/Articles"
import Counter from "./composants/Counter"
import Faq from "./composants/Faq"
import articlesFromApi from "./composants/articlesFromApi"

function App() {
  return (
    <div>
        <Header />
        <Articles articlesFromApi={articlesFromApi}/>
        <Counter />
        <Faq  articlesFromApi={articlesFromApi}/>
        <Footer />
    </div>
  );
}

export default App;
